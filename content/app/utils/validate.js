'use strict';

require('module-alias/register');

const { UserError } = require('@app/utils/errors');

const validate = async (schema, value) => {
  if (schema.validate(value).error) {
    throw new UserError('invalid params/body', 400);
  }
};

module.exports = { validate };
