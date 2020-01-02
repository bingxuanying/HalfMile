'use strict';

require('module-alias/register');
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

