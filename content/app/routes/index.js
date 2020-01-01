'use strict';

require('module-alias/register');
const Router = require('koa-router'),
  { getByEmail } = require('@app/controllers/users');

const router = new Router();
router
  .get('/users/:email', getByEmail);

module.exports = {
  routes() { return router.routes(); },
  allowedMethods() { return router.allowedMethods(); },
};
