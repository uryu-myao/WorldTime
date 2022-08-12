let mix = require('laravel-mix');

mix
  .setPublicPath('./')
  .sass('assets/sass/style.scss', 'dist/css')
  .js('assets/js/contentScript.js', 'dist/js')
  .vue()
  .copy('assets/images/', 'dist/images')
  .options({
    processCssUrls: false,
  });
