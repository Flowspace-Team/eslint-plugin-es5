'use strict';

module.exports = {
  valid: [
    '\'test\'',
    '"test"'
  ],
  invalid: [
    {
      code: '`test`',
      output: `'test'`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '`test${foo}`',
      output: `'test'+foo`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '`test${foo()}`',
      output: `'test'+foo()`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '`test${foo.bar}`',
      output: `'test'+foo.bar`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '`test${1} test${2}`',
      output: `'test'+1+' test'+2`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '`test${1}${2}`',
      output: `'test'+1+2`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '`\'"\n`',// to escape test
      output: `'\\'"\\n'`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '`\\`\\${a}`',// escape code test
      output: "'`${a}'",
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '``',// empty
      output: `''`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: '`${1}${2}`',// expressions only
      output: `''+1+2`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    },
    {
      code: 'tag`Hello ${ a + b } world ${ a * b}`',// tagged
      output: `tag(['Hello ',' world ',''],a + b,a * b)`,
      errors: [{ message: 'Unexpected template-string expression.' }]
    }
  ]
};
