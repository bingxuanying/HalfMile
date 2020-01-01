'use strict';

require('module-alias/register');
require('dotenv').config({ path: './.env' });
const uuidv1 = require('uuid/v1');
const { ServerError, BadRequest } = require('@app/utils/errors');
const { encrypt } = require('@app/utils/encrypt');
const { docClient } = require('./dynamodb/');

const tableUsers = process.env.DYNAMODB_USERS;

const getUser = async email => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: tableUsers,
      Key: { email },
    };
    docClient.get(params, (err, data) => {
      if (err) reject(new ServerError('db getUser failed'));
      resolve(data.Item);
    });
  });
};

const createUser = async (email, password) => {
  return getUser(email).then(user => {
    if (user) throw new BadRequest('user already exists');
    return encrypt(password).then(hash => {
      const params = {
        TableName: tableUsers,
        Item: { email, password: hash, uuid: uuidv1() },
      };
      return new Promise((resolve, reject) => {
        docClient.put(params, err => {
          if (err) reject(new ServerError('db createUser failed'));
          resolve();
        });
      });
    });
  });
};

const rmUser = async email => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: tableUsers,
      Key: { email },
    };
    docClient.delete(params, err => {
      if (err) reject(new ServerError('db rmUser failed'));
      resolve();
    });
  });
};

module.exports = { getUser, createUser, rmUser };
