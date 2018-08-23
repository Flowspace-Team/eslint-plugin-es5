'use strict';

module.exports = {
  valid: [
    'Object.create()',
  ],
  invalid: [
    { code: 'Object.assign()', errors: [{ message: 'ES6 static methods not allowed: Object.assign' }] },
  ]
};
