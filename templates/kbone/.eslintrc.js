module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 0,
    'import/extensions': [0, { tsx: 'never', ts: 'never' }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    indent: [2, 2],
    'react/jsx-indent-props': [2, 2],
    '@typescript-eslint/no-var-requires': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 解析的后缀名
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    },
  },
  globals: {
    wx: 'readonly',
  },
};
