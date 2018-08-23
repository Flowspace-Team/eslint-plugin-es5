'use strict';

module.exports = {
  valid: [
    'test.testMethod()',
    'test.otherTestMethod()'
  ],
  invalid: [
    { code: '[0, 0, 0].fill(7, 1);', errors: [{ message: 'ES6 methods not allowed: fill' }] }
  ]
};
