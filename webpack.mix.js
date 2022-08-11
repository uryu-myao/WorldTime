let mix = require('laravel-mix');

mix
  .setPublicPath('./')
  .sass('assets/sass/style.scss', 'dist/css')
  .js('assets/js/background.js', 'dist/js')
  .js('assets/js/popup.js', 'dist/js')
  .vue()
  .copy('assets/images/', 'dist/images')
  .options({
    processCssUrls: false,
  });
