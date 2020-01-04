'use strict';

require('module-alias/register');
const assert = require('assert');
const { encrypt, compare } = require('@app/utils/encrypt');

describe('utils.encrypt', () => {
  const password = 'this_is_password';

  describe('encrypt().compare()', () => {
    it('should return true', done => {
      encrypt(password).then(hash => {
        return compare(password, hash).then(res => {
          assert.equal(res, true);
          done();
        });
      }).catch(done);
    });
  });
});
