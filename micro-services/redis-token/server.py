''' JWT token cache server based on grpc '''

import os
import sys
import time
import logging
from concurrent import futures

import grpc
import redis
from dotenv import load_dotenv

import token_pb2_grpc
import token_pb2

load_dotenv('.env')
MISSING_ENVS = list(filter(
  lambda env: not os.getenv(env),
  'TOKEN_PORT,REDIS_HOST,REDIS_PORT,REDIS_DB,DEV'.split(',')
))
if MISSING_ENVS:
  print(f'missing envs: {MISSING_ENVS}')
IS_DEV = os.getenv('DEV') == 'True'
if IS_DEV:
  print('starting token server in dev mode')

RC = redis.Redis(
  host=os.getenv('REDIS_HOST'),
  port=int(os.getenv('REDIS_PORT')),
  db=int(os.getenv('REDIS_DB'))
)

class TokenPool(token_pb2_grpc.TokenPoolServicer):
  ''' token service '''
  def PostToken(self, request, context):
    ''' post token to redis with expire '''
    ttl = request.exp - round(time.time())
    RC.set(request.token, '', ex=ttl)
    return token_pb2.Empty()

  def CheckToken(self, request, context):
    ''' check if token exists '''
    return token_pb2.IsInPool(isInPool=RC.exists(request.token) == 1)

def serve():
  ''' start server '''
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  token_pb2_grpc.add_TokenPoolServicer_to_server(TokenPool(), server)
  server.add_insecure_port(f'[::]:{os.getenv("TOKEN_PORT")}')
  server.start()
  print(f'token server listening on {os.getenv("TOKEN_PORT")}')
  server.wait_for_termination()

if __name__ == '__main__':
  logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)
  serve()
