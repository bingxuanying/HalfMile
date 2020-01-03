'use strict';

require('module-alias/register');
require('dotenv').config({ path: './.env' });

const AWS = require('aws-sdk');
const uuidv1 = require('uuid/v1');
const { encrypt } = require('@app/utils/encrypt');

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: `https://dynamodb.${process.env.AWS_REGION}.amazonaws.com`,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const tableUsers = {
  get: async email => {
    const params = { TableName: process.env.TABLE_USERS, Key: { email } };
    return new Promise((resolve, reject) => {
      docClient.get(params, (err, data) => {
        if (err) reject(err);
        resolve(data.Item);
      });
    });
  },
  new: async (email, password) => {
    const hash = await encrypt(password);
    const params = {
      TableName: process.env.TABLE_USERS,
      Item: {
        email,
        password: hash,
        uuid: uuidv1(),
      },
    };
    return new Promise((resolve, reject) => {
      docClient.put(params, err => {
        if (err) reject(err);
        resolve();
      });
    });
  },
  delete: async email => {
    const params = { TableName: process.env.TABLE_USERS, Key: { email } };
    return new Promise((resolve, reject) => {
      docClient.delete(params, err => {
        if (err) reject(err);
        resolve();
      });
    });
  },
  update: async params => {
    return new Promise((resolve, reject) => {
      docClient.update(params, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
};

module.exports = { dynamodb, docClient, tableUsers };
