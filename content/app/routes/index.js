'use strict';

require('module-alias/register');

const Router = require('koa-router');
const {
  getByEmail,
  postByEmailPassword,
  deleteByEmail,
  login,
} = require('@app/controllers/users');

const publicRouter = new Router(),
  protectedRouter = new Router();

publicRouter
  .get('/echo', async (ctx, next) => {
    ctx.body = { message: 'echo back' };
    ctx.status = 200;
    await next();
  })
  .post('/login', login)
  .post('/users', postByEmailPassword);

protectedRouter
  .get('/echo-login', async (ctx, next) => {
    ctx.body = { message: 'echo back from login' };
    ctx.status = 200;
    await next();
  })
  .get('/users/:email', getByEmail)
  .delete('/users/:email', deleteByEmail);

module.exports = {
  publicRoutes: () => publicRouter.routes(),
  publicAllowedMethods: () => publicRouter.allowedMethods(),
  protectedRoutes: () => protectedRouter.routes(),
  protectedAllowedMethods: () => protectedRouter.allowedMethods(),
};
