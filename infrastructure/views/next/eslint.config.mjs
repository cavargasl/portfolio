import reactPlugin from '@eslint-react/eslint-plugin'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginTailwindCss from 'eslint-plugin-tailwindcss'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ...eslintPluginReact.configs.flat.recommended,
    rules: {
      'react/void-dom-elements-no-children': 'error',
    },
  },

  {
    files: ['**/*.{tsx,jsx}'],
    plugins: { 'react-hooks': eslintPluginReactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-unused-vars': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ...reactPlugin.configs.recommended,
    files: ['**/*.{ts,tsx,jsx}'],
    rules: {
      '@eslint-react/naming-convention/filename': ['error', { 'rule': 'PascalCase', 'excepts': ['^use[A-Z]', 'layout', 'page', 'index'] }],
      '@eslint-react/hooks-extra/no-redundant-custom-hook': 'warn',
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'warn',
      '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': 'warn',
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
      },
    },
    plugins: {
      'tailwindcss': eslintPluginTailwindCss,
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/migration-from-tailwind-2': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
    },
  },
  {
    ignores: ['node_modules', '.next', 'out'],
  },
]
