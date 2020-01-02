'use strict';

require('module-alias/register');

const bcrypt = require('bcrypt');
const { ServerError } = require('@app/utils/errors');

const encrypt = async password => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) reject(new ServerError(`encrypt.encrypt: ${err.message}`));
      resolve(hash);
    });
  });
};

const compare = async (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, res) => {
      if (err) reject(new ServerError(`encrypt.compare: ${err.message}`));
      resolve(res);
    });
  });
};

module.exports = { encrypt, compare };
