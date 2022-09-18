const mix = require('laravel-mix');
require('laravel-mix-compress');
require('laravel-mix-eslint');

mix
  .setPublicPath('./')
  .sass('src/sass/style.scss', 'dist/css')
  .js('src/js/contentScript.js', 'dist/js')
  .eslint({
    fix: true,
    extensions: ['js'],
  })
  .compress({
    productionOnly: false,
    minRatio: 1,
  })
  .copy('src/images/', 'dist/images')
  .copy('src/shared/', 'dist/shared')
  .options({
    processCssUrls: false,
  });
