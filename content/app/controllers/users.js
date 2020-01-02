'use strict';

require('module-alias/register');

const Joi = require('joi');
const { BadRequest } = require('@app/utils/errors');
const {
  getUser,
  createUser,
  rmUser,
  tokenLogin,
} = require('@app/services/users');

const getByEmail = async (ctx, next) => {
  ctx.body = await getUser(ctx.params.email);
  await next();
};

const userSchema = Joi.object().keys({
  email: Joi.string().email().max(256)
    .required(),
});

const postByEmailPassword = async (ctx, next) => {
  const body = await Joi.validate(ctx.request.body, userSchema, {
    allowUnknown: true,
  });
  await createUser(body.email, body.password);
  ctx.body = { message: 'user created' };
  ctx.status = 200;
  await next();
};

const deleteByEmail = async (ctx, next) => {
  ctx.body = await rmUser(ctx.params.email);
  await next();
};

const loginSchema = Joi.object().keys({
  email: Joi.string().email().max(256)
    .required(),
  password: Joi.string().max(256)
    .required(),
});

const login = async (ctx, next) => {
  try {
    const body = await Joi.validate(ctx.request.body, loginSchema, {
      allowUnknown: true,
    });
    ctx.body = {
      token: await tokenLogin(body.email, body.password),
      message: 'Login Success',
    };
    ctx.status = 200;
  } catch (err) {
    throw new BadRequest('invalid params');
  }
  await next();
};

module.exports = { getByEmail, postByEmailPassword, deleteByEmail, login };
