'use strict';

require('module-alias/register');
const { createUser, getUser, rmUser } = require('@app/controllers/users');
const { BadRequest } = require('@app/utils/errors');
const assert = require('assert');

describe('controllers.users', () => {
  const { email, password } = {
    email: 'debug@gmail.com',
    password: 'password',
  };

  it('rmUser() should rm user', done => {
    rmUser(email).then(done()).catch(done);
  });

  it('createUser() should create user', done => {
    createUser(email, password).then(done()).catch(done);
  });

  it('createUser() should throws BadRequest when user already exists', () => {
    assert.throws(() => {
      createUser(email, password);
    }, BadRequest, 'user already exists');
  });

  it('getUser() should gets user', done => {
    getUser(email, password).then(done()).catch(done);
  });
});
