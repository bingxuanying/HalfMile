'use strict';

require('module-alias/register');
require('dotenv').config({ path: './.env' });

const jwt = require('jsonwebtoken');
const { UserError } = require('@app/utils/errors');

const secretKey = process.env.SECRET_KEY;

const loginRequired = async (ctx, next) => {
  if (ctx.status !== 404) return next();
  if (!ctx.request.header.authorization) {
    throw new UserError('missing authorization', 403);
  }
  const params = ctx.request.header.authorization.split(' ');
  if (params.length !== 2 || params[0] !== 'Bearer') {
    throw new UserError('invalid authorization format', 403);
  }
  ctx.user = jwt.verify(params[1], secretKey);
  await next();
};

module.exports = { loginRequired };
