import astro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
//import mdx from 'eslint-plugin-mdx';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'public/', '.astro/'],
  },
  // {
  //   files: ['**/*.astro'],
  //   plugins: { astro },
  //   rules: {
  //     ...astro.configs.recommended.rules,
  //   },
  // },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { '@typescript-eslint': tseslint },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  //   {
  //     files: ['**/*.mdx'],
  //     plugins: { mdx },
  //     languageOptions: {
  //       parser: mdx.parsers['eslint-mdx'],
  //     },
  //     rules: {
  //       ...mdx.configs.recommended.rules,
  //     },
  //   },
  {
    plugins: { prettier, import: importPlugin },
    rules: {
      'prettier/prettier': 'error',
      'import/order': 'warn',
    },
  },
];
