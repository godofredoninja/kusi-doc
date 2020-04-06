const mix = require('laravel-mix')

require('mix-tailwindcss')
require('laravel-mix-purgecss')

// const rootPath = mix.paths.root.bind(mix.paths)

mix.webpackConfig({
  devtool: 'source-map'
})

mix
  .js('js/app.js', 'scripts/')
  .js('js/prism.js', 'scripts/')
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

// Copy Images
mix.copyDirectory('img', '../assets/img')

// Source Maps only for dev
if (mix.inProduction()) {
  mix.purgeCss({
    content: [
      '../**/*.hbs',
      './js/**/*.js'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist: ['lg:max-h-(screen-32)', 'md:max-h-(screen-32)']
    // whitelistPatterns: [/max-h.*/]
  })
} else {
  mix.sourceMaps()
}
