''' health check server '''

import os
import redis
from dotenv import load_dotenv
from flask import Flask, request

load_dotenv('.env')
MISSING_ENVS = list(filter(
  lambda env: not os.getenv(env),
  'REDIS_HOST,REDIS_PORT,REDIS_DB,DEV'.split(',')
))
if MISSING_ENVS:
  print(f'missing envs: {MISSING_ENVS}')
IS_DEV = os.getenv('DEV') == 'True'

APP = Flask(__name__)

RC = redis.Redis(
  host=os.getenv('REDIS_HOST'),
  port=int(os.getenv('REDIS_PORT')),
  db=int(os.getenv('REDIS_DB'))
)

@APP.route('/', methods=['GET'])
def ping():
  ''' echo back '''
  return 'pong'

@APP.route('/tokens/<string:key>', methods=['GET'])
def token(key):
  ''' resource token '''
  res = RC.get(key) or b'None'
  return {
    'message': res.decode('utf-8')
  }

@APP.route('/tokens', methods=['POST'])
def tokens():
  ''' resource tokens '''
  key, value = request.form['key'], request.form['value']
  RC.set(key, value, ex=30)
  return {
    'message': 'ok'
  }

if __name__ == '__main__':
  APP.run(debug=IS_DEV, host='0.0.0.0', port=5000)
