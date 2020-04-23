module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    'cssnano',
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['pages/*.jsx', 'pages/*.tsx']
      }
    ]
  ]
}
