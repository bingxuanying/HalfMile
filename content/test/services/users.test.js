'use strict';

require('module-alias/register');
const { createUser, getUser, rmUser } = require('@app/services/users');
// const { BadRequest } = require('@app/utils/errors');
const assert = require('assert');

describe('controllers.users', () => {
  const { email, password } = {
    email: 'test@gmail.com',
    password: 'password',
  };

  describe('createUser().getUser().rmUser().getUser()', () => {
    it('should return undefined', done => {
      createUser(email, password)
        .then(() => getUser(email))
        .then(user => {
          assert.equal(user.email, email);
          return rmUser(email);
        })
        .then(() => getUser(email))
        .then(user => {
          assert.equal(user, undefined);
          done();
        })
        .catch(done);
    });
  });

  // TODO test createUser().createUser() throw BadRequest
});
