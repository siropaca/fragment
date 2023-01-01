module.exports = {
  plugins: ['import', 'unused-imports'],
  extends: ['next', 'turbo', 'eslint:recommended', 'prettier'],
  ignorePatterns: ['*.d.ts', '*.config.js'],
  rules: {
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
  },
};
