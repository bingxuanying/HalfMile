'use strict';

require('module-alias/register');

const Router = require('koa-router');
const {
  register,
  unregister,
  login,
  logout,
} = require('@app/controllers/auth');
const {
  getPlan,
  getPlans,
  createPlan,
  updatePlan,
  deletePlan,
} = require('@app/controllers/plans');

const publicRouter = new Router(),
  protectedRouter = new Router();

publicRouter
  .get('/echo', async (ctx, next) => {
    ctx.body = { message: 'echo back' };
    ctx.status = 200;
    await next();
  })
  .post('/login', login)
  .post('/register', register);

protectedRouter
  .get('/logout', logout)
  .get('/unregister', unregister)
  .get('/echo-login', async (ctx, next) => {
    ctx.body = { message: 'echo back from login' };
    ctx.status = 200;
    await next();
  })
  .post('/plans', createPlan)
  .get('/plans', getPlans)
  .get('/plans/:planId', getPlan)
  .put('/plans/:planId', updatePlan)
  .delete('/plans/:planId', deletePlan);

module.exports = {
  publicRoutes: () => publicRouter.routes(),
  publicAllowedMethods: () => publicRouter.allowedMethods(),
  protectedRoutes: () => protectedRouter.routes(),
  protectedAllowedMethods: () => protectedRouter.allowedMethods(),
};
