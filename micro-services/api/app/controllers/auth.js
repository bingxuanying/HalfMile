'use strict';

require('module-alias/register');

const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { UserError } = require('@app/utils/errors');
const { tableUsers } = require('@app/services/dynamodb');
const { compare } = require('@app/utils/encrypt');
const { validate } = require('@app/utils/validate');
const { invalidate } = require('@app/utils/token-pool')
  (__dirname + '../../../token.proto');

const secretKey = process.env.SECRET_KEY;

const registerSchema = Joi.object().keys({
  email: Joi.string().email().max(256)
    .required(),
  password: Joi.string().max(256)
    .required(),
});

const register = async (ctx, next) => {
  const body = ctx.request.body;
  await validate(registerSchema, body)
    .then(() => tableUsers.get(body.email))
    .then(user => {
      if (user) throw new UserError('user already exists', 400);
    })
    .then(() => tableUsers.new(body.email, body.password));
  ctx.body = await tableUsers.get(body.email);
  delete ctx.body.password;
  ctx.status = 200;
  await next();
};

const unregister = async (ctx, next) => {
  await tableUsers.delete(ctx.user.email);
  ctx.body = {};
  ctx.state = 200;
  await next();
};

const loginSchema = Joi.object().keys({
  email: Joi.string().email().max(256)
    .required(),
  password: Joi.string().max(256)
    .required(),
});

const login = async (ctx, next) => {
  const body = ctx.request.body;
  const res = loginSchema.validate(body);
  if (res.error) throw new UserError('invalid params', 400);
  const token = await tableUsers.get(body.email)
    .then(user => {
      if (!user) throw new UserError('email/password not match', 401);
      return compare(body.password, user.password);
    })
    .then(res => {
      if (!res) throw new UserError('email/password not match', 401);
    })
    .then(() => {
      return jwt.sign({
        email: body.email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
      }, secretKey);
    });
  ctx.body = { token };
  ctx.state = 200;
  await next();
};

const logout = async (ctx, next) => {
  await invalidate(ctx.user.token, ctx.user.exp);
  ctx.body = { };
  ctx.state = 200;
  await next();
};

module.exports = { register, unregister, login, logout };
