'use strict';

require('module-alias/register');
require('dotenv').config({ path: './.env' });

const uuidv1 = require('uuid/v1');
const jwt = require('jsonwebtoken');
const { ServerError, BadRequest } = require('@app/utils/errors');
const { encrypt, compare } = require('@app/utils/encrypt');
const { docClient } = require('@app/services/dynamodb/');

const tableUsers = process.env.TABLE_USERS;
const secretKey = process.env.SECRET_KEY;

const getUser = async email => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: tableUsers,
      Key: { email },
    };
    docClient.get(params, (err, data) => {
      if (err) {
        reject(new ServerError(
          `services.users.createUser: ${err.message}`
        ));
      }
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
          if (err) {
            reject(new ServerError(
              `services.users.createUser: ${err.message}`
            ));
          }
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
      if (err) {
        reject(new ServerError(`services.users.rmUser: ${err.message}`));
      }
      resolve();
    });
  });
};

const tokenLogin = async (email, password) => {
  return getUser(email).then(user => {
    if (!user) throw new BadRequest('email/password not match');
    return compare(password, user.password).then(res => {
      if (!res) throw new BadRequest('email/password not match');
      return jwt.sign({
        email: user.email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
      }, secretKey);
    });
  });
};

const getUserFromToken = async token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, user) => {
      if (err) reject(new BadRequest('invalid token'));
      if (user.exp < Math.floor(Date.now() / 1000)) {
        reject(new BadRequest('token expired'));
      }
      resolve(user);
    });
  });
};

module.exports = { getUser, createUser, rmUser, tokenLogin, getUserFromToken };
