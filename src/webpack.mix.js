const mix = require('laravel-mix')

require('mix-tailwindcss')
require('laravel-mix-purgecss')

// const rootPath = mix.paths.root.bind(mix.paths)

mix.webpackConfig({
  devtool: 'source-map'
})

mix
  .js('js/app.js', 'scripts/')
  .setResourceRoot('/assets')
  .setPublicPath('../assets')
  .sass('scss/app.scss', 'styles/')
  .tailwind('./tailwind.config.js')
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

// mix.sourceMaps()

// Source Maps only for dev
if (mix.inProduction()) {
  mix.purgeCss({
    content: [
      '../**/*.hbs'
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/]
  })
} else {
  mix.sourceMaps()
}
