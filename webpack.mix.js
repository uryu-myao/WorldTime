const mix = require('laravel-mix');

mix
  .setPublicPath('./')
  .sass('src/sass/style.scss', 'dist/css')
  .js('src/js/contentScript.js', 'dist/js')
  .vue()
  .copy('src/images/', 'dist/images')
  .options({
    processCssUrls: false,
  });
