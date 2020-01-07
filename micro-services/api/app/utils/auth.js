'use strict';

require('module-alias/register');
require('dotenv').config({ path: './.env' });

const jwt = require('jsonwebtoken');
const { UserError } = require('@app/utils/errors');
const { isInvalidate } = require('@app/utils/token-pool')
  (__dirname + '../../../token.proto');

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
  const token = params[1];
  if (await isInvalidate(token)) {
    throw new UserError('authorization expired', 401);
  }
  ctx.user = jwt.verify(token, secretKey);
  ctx.user.token = token;
  await next();
};

module.exports = { loginRequired };
