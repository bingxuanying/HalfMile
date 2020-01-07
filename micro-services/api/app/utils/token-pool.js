'use strict';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const init = protoPath => {
  const packageDefinition = protoLoader.loadSync(
    protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    }
  );
  const tokenProto = grpc.loadPackageDefinition(packageDefinition).token;

  const client = new tokenProto.TokenPool(
    `${process.env.TOKEN_HOST}:${process.env.TOKEN_PORT}`,
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

  return { invalidate, isInvalidate };
};

module.exports = init;
