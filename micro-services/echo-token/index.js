'use strict';

const fs = require('fs');
const assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');

// env check
require('dotenv').config();
const requiredEnvs = 'TOKEN_HOST,TOKEN_PORT,SERVER_PORT,DEV'.split(',');
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

// prote check
const protoPath = __dirname + '/token.proto';
assert(fs.existsSync(protoPath));

const { invalidate, isInvalidate } = require('./token-pool')(protoPath);

const app = express();
const port = process.env.SERVER_PORT;

app.use(timeout('3s'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => res.send('echo back'));

app.post('/tokens', (req, res, next) => {
  const { token, exp } = req.body;
  if (!token || !exp) {
    res.send('bad request');
    return next();
  }
  invalidate(token, parseInt(exp, 10))
    .then(() => res.json({ message: 'ok' }))
    .catch(err => res.send(err.message));
});

app.get('/tokens/:token', (req, res, next) => {
  const token = req.params.token;
  if (!token) {
    res.send('bad request');
    return next();
  }
  isInvalidate(token)
    .then(hasToken => res.json({ message: hasToken }))
    .catch(err => res.send(err.message));
});

app.listen(port, () =>
  console.log(`echo-redis-token listening on port ${port}!`)
);
