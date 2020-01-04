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

const requiredEnvs = `AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY,AWS_REGION,\
TABLE_USERS,SECRET_KEY,PORT,DEV`.split(',');
for (const env of requiredEnvs) {
  if (!(env in process.env)) {
    console.log(`missing env: ${env}`);
    process.exit();
  }
}

const isDev = process.env.DEV === 'true';

if (isDev) console.log('running in dev mode');

const koa = new Koa();

koa.use(async (ctx, next) => {
  return next().catch(err => {
    if (err instanceof UserError) {
      ctx.status = err.status;
      ctx.body = { message: err.message };
    } else {
      ctx.status = 500;
      ctx.body = { message: isDev ? err.message : 'Internal Server Error' };
    }
  });
});

koa
  .use(KoaBody())
  .use(publicRoutes())
  .use(publicAllowedMethods())
  .use(loginRequired)
  .use(protectedRoutes())
  .use(protectedAllowedMethods())
  .listen(process.env.PORT);
