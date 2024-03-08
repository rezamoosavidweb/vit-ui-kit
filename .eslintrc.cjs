module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  includes: ['./src/**/*','./vite.config.ts'],
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      project: ['./tsconfig.json'], // Specify it only for TypeScript files
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
  },
}
