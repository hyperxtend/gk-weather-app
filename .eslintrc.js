module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'lines-between-class-members': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'operator-linebreak': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-typos': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'array-element-newline': 'off',
  },
};
