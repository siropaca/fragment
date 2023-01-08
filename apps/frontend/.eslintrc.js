module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'custom',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    // disable the rule for all files
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['src/lib/**/*.ts', 'src/utils/**/*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    jest: true,
  },
};
