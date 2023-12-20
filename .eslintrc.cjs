module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'eqeqeq': ['error', 'smart'],
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
