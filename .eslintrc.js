module.exports = {
    env: {
      es2021: true,
      node: true,
    },
    extends: 'eslint:recommended',
    plugins: ['@stylistic'],
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
    },
  };