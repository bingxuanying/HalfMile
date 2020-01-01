'use strict';

require('module-alias/register');
const { encrypt } = require('@app/utils/encrypt');
const { ServerError, BadRequest } = require('@app/utils/errors');
const assert = require('assert');


describe('utils.errors', () => {
  it('ServerError should throw', () => {
    assert.throws(() => {
      throw new ServerError('internal server error');
    }, ServerError, 'internal server error');
  });

  it('BadRequest should throw', () => {
    assert.throws(() => {
      throw new BadRequest('bad request');
    }, BadRequest, 'bad request');
  });
});

describe('utils.encrypt', () => {
  const password = 'this_is_password';
  it('should encrypt without error', done => {
    encrypt(password).then(() => done()).catch(done);
  });
});
