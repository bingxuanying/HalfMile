'use strict';

class ServerError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ServerError';
  }
}

class BadRequest extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'BadRequest';
  }
}

module.exports = { ServerError, BadRequest };
