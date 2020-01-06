from concurrent import futures
from dotenv import load_dotenv
import logging
import redis
import time
import grpc
import sys
import os

import token_pb2_grpc
import token_pb2

load_dotenv('.env')
missing_envs = list(filter(
    lambda env: not os.getenv(env),
    'TOKEN_PORT,REDIS_PORT,REDIS_DB'.split(',')
))
if missing_envs:
    print(f'missing envs: {missing_envs}')

r = redis.Redis(
    host='127.0.0.1',
    port=int(os.getenv('REDIS_PORT')), 
    db=int(os.getenv('REDIS_DB'))
)

class TokenPool(token_pb2_grpc.TokenPoolServicer):
    
    def PostToken(self, request, context):
        ttl = request.exp - round(time.time())
        r.set(request.token, '', ex=ttl)
        return token_pb2.Empty()
    
    def CheckToken(self, request, context):
        return token_pb2.IsInPool(isInPool=r.exists(request.token) == 1)

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    token_pb2_grpc.add_TokenPoolServicer_to_server(TokenPool(), server)
    server.add_insecure_port(f'[::]:{os.getenv("TOKEN_PORT")}')
    server.start()
    print(f'token server listening on {os.getenv("TOKEN_PORT")}')
    server.wait_for_termination()

if __name__ == '__main__':
    logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)
    serve()