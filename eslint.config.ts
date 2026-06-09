import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],

    plugins: {
      '@stylistic': stylistic
    },

    rules: {
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/brace-style': 'error',
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['case', 'default'], next: '*' }
      ],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/jsx-closing-bracket-location': 1,
      '@stylistic/jsx-closing-tag-location': 1,
      '@stylistic/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never', propElementValues: 'always' }
      ],
      '@stylistic/jsx-curly-newline': 'error',

      'astro/no-unused-css-selector': 'off',
      'astro/semi': ['error', 'never'],

      'no-duplicate-imports': 'error'
    }
  },

  {
    ignores: ['dist/', 'node_modules/', '.vscode/', '.astro/', 'public/']
  }
])
