module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
