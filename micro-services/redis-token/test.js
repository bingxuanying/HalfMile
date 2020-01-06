'use strict';

const { invalidate, isInvalidate } = require('./token-pool');

describe('post token with exp', function() {
  this.timeout(6000);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    exp = Math.floor(Date.now() / 1000) + 5;

  it('should run without error', done => {
    invalidate(token, exp).then(() => {
      setTimeout(async () => {
        const res = await isInvalidate(token);
        if (res) done(new Error('token still exists after 5.5s'));
        else done();
      }, 5500);
    });
  });
});
