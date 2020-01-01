'use strict';

const Koa = require('koa'),
  KoaBody = require('koa-body'),
  { routes, allowedMethods } = require('./app/routes'),
  koa = new Koa();

koa
  .use(KoaBody())
  .use(routes())
  .use(allowedMethods())
  .listen(8080);
