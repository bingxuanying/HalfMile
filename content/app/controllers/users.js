'use strict';

require('module-alias/register');
const Joi = require('joi');
const { getUser, createUser, rmUser } = require('@app/services/users');

const getByEmail = async (ctx, next) => {
  ctx.body = await getUser(ctx.params.email);
  await next();
};

const userSchema = Joi.object().keys({
  email: Joi.string().email().max(256)
    .required(),
});

const postByEmailPassword = async (ctx, next) => {
  const body = await Joi.validate(ctx.request.body, userSchema, { allowUnknown: true });
  ctx.body = await createUser(body.email, body.password);
  ctx.status = 200;
  await next();
};

const deleteByEmail = async (ctx, next) => {
  ctx.body = await rmUser(ctx.params.email);
  await next();
};

module.exports = { getByEmail, postByEmailPassword, deleteByEmail };
