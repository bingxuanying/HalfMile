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

class Forbidden extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'Forbidden';
  }
}

class UserError extends Error {
  constructor(msg, status) {
    super(msg);
    this.status = status;
  }
}

module.exports = { ServerError, BadRequest, Forbidden, UserError };
