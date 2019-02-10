module.exports = {
  plugins: ['react-hooks', 'react', 'prettier', 'emotion'],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
    jsx: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'emotion/jsx-import': 'error',
    'react/prop-types': 'OFF',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
