'use strict';

require('dotenv').config({ path: './.env' });
require('module-alias/register');

const Koa = require('koa');
const KoaBody = require('koa-body');
const { UserError } = require('@app/utils/errors');
const { loginRequired } = require('@app/utils/auth');
const {
  publicRoutes, publicAllowedMethods,
  protectedRoutes, protectedAllowedMethods,
} = require('@app/routes');

const isDev = process.env.DEV === 'true';

const koa = new Koa();

koa.use(async (ctx, next) => {
  return next().catch(err => {
    ctx.status = err instanceof UserError ? err.status : 500;
    ctx.body = { message: isDev ? err.message : err.status };
  });
});

koa
  .use(KoaBody())
  .use(publicRoutes())
  .use(publicAllowedMethods())
  .use(loginRequired)
  .use(protectedRoutes())
  .use(protectedAllowedMethods())
  .listen(8080);
