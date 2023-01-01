module.exports = {
  plugins: ['import', 'unused-imports', 'tailwindcss'],
  extends: ['next', 'turbo', 'eslint:recommended', 'prettier', 'plugin:tailwindcss/recommended'],
  ignorePatterns: ['*.d.ts', '*.config.js', '**/gql/*.ts'],
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    '@next/next/no-html-link-for-pages': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'turbo/no-undeclared-env-vars': 'off',
    'react/no-children-prop': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
};
