'use strict';

require('dotenv').config({ path: './.env' });
require('module-alias/register');

const fs = require('fs');
const Koa = require('koa');
const assert = require('assert');
const KoaBody = require('koa-body');
const cors = require('@koa/cors');
const { UserError } = require('@app/utils/errors');
const { loginRequired } = require('@app/utils/auth');
const {
  publicRoutes, publicAllowedMethods,
  protectedRoutes, protectedAllowedMethods,
} = require('@app/routes');

// envs
const requiredEnvs = `AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY,AWS_REGION,\
TABLE_USERS,SECRET_KEY,PORT,DEV,TOKEN_HOST,TOKEN_PORT`.split(',');
const missingEnvs = [];
for (const env of requiredEnvs) {
  if (!(env in process.env)) {
    missingEnvs.push(env);
  }
}
if (missingEnvs.length) {
  console.log(`missing envs: ${missingEnvs.join(',')}`);
  process.exit(-1);
}
const isDev = process.env.DEV === 'true';
if (isDev) console.log('running in dev mode');

// protos
const protoPath = `${__dirname}/token.proto`;
assert(fs.existsSync(protoPath));

// app
const koa = new Koa();
koa.use(cors({ origin: '*' }));
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
