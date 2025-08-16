import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js rules for code quality
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier integration
  ...compat.extends('prettier'),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          // This enables implied strict mode for all files
          impliedStrict: true,
          jsx: true,
        },
      },
    },
    rules: {
      // STRICT MODE ENFORCEMENT
      strict: ['error', 'never'], // Prevents explicit "use strict" since we use implied strict

      // ONLY CODE QUALITY RULES (no formatting)
      'no-unused-vars': 'off', // handled by TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',
      'react-hooks/exhaustive-deps': 'warn',

      // Additional quality rules that work well with strict mode
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-implicit-globals': 'error',

      // DISABLE ALL FORMATTING RULES
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
      'space-before-function-paren': 'off',
      'object-curly-spacing': 'off',
      'padding-line-between-statements': 'off',
    },
  },
];

export default eslintConfig;
