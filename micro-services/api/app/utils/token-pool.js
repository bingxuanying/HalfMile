'use strict';

require('dotenv').config({ path: './.env' });
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const requiredEnvs = `REDIS_PORT`.split(',');
for (const env of requiredEnvs) {
  if (!(env in process.env)) {
    console.log(`missing env: ${env}`);
    process.exit();
  }
}

const PROTO_PATH = __dirname + '/token.proto';
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);
const tokenProto = grpc.loadPackageDefinition(packageDefinition).token;

const client = new tokenProto.TokenPool(
  `localhost:${process.env.TOKEN_PORT}`,
  grpc.credentials.createInsecure()
);

const invalidate = async (token, exp) => {
  return new Promise((resolve, reject) => {
    client.PostToken({ token, exp }, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

const isInvalidate = async token => {
  return new Promise((resolve, reject) => {
    client.CheckToken({ token }, (err, res) => {
      if (err) reject(err);
      resolve(res.isInPool);
    });
  });
};

module.exports = { invalidate, isInvalidate };
