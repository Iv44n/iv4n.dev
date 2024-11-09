import globals from 'globals'
import jsPlugins from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import stylistic from '@stylistic/eslint-plugin'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

const config = [
  // Configuración general para todos los archivos JS, TS y Astro
  {
    files: ['**/*.{js,mjs,cjs,ts,astro}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx
    },
    rules: {
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/semi': ['error', 'never'],
      '@stylistic/ts/comma-dangle': ['error', 'never'],
      '@stylistic/ts/block-spacing': ['error', 'always'],
      '@stylistic/ts/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@stylistic/ts/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/ts/object-curly-spacing': ['error', 'always'],
      '@stylistic/ts/brace-style': 'error',
      '@stylistic/ts/function-call-spacing': ['error', 'never'],
      '@stylistic/ts/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['case', 'default'], next: '*' }
      ],
      '@stylistic/ts/space-infix-ops': 'error',
      '@stylistic/ts/type-annotation-spacing': 'error',
      '@stylistic/jsx/jsx-closing-bracket-location': 1,
      '@stylistic/jsx/jsx-closing-tag-location': 1,
      '@stylistic/jsx/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never', propElementValues: 'always' }
      ],
      '@stylistic/jsx/jsx-curly-newline': 'error',
      'astro/no-unused-css-selector': 'off',
      'astro/semi': ['error', 'never'],
      'no-duplicate-imports': 'error'
    }
  },

  // Configuración específica para archivos .js
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  },

  // Incluir configuraciones recomendadas de ESLint para JS y TS
  jsPlugins.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],

  // Configuración específica para archivos .d.ts (desactiva triple-slash reference)
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 0
    }
  },

  // Carpetas ignoradas
  {
    ignores: ['dist/', 'node_modules/', '.vscode/', '.astro/']
  }
]

export default config
