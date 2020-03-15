const mix = require('laravel-mix')

mix.webpackConfig({
  devtool: 'source-map'
})

mix.js('js/app.js', 'scripts/')
  .setResourceRoot('/assets')
  .setPublicPath('../assets')
  .sass('scss/app.scss', 'styles/')
  .options({
    processCssUrls: false
  })
  .browserSync({
    open: false,
    proxy: 'localhost:2368',
    files: [
      'js/**/*.js',
      'scss/**/*.scss',
      '../**/*.hbs'
    ]
  })

// Source Maps only for dev
mix.sourceMaps()
// if (mix.inProduction()) {
// }


