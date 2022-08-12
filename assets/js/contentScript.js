'use strict';

// WorldTimeAPI
// http://worldtimeapi.org/

const timeApi_url = 'https://worldtimeapi.org/api/timezone/';

const mainData = fetch(
  'http://worldtimeapi.org/api/timezone/Asia/Tokyo'
).then((res) => res.json());

// console.log(mainData);
// console.log(mainData.abbreviation);

// document.querySelector('.header').classList.contains('no-sticky');

// Dark Mode 切り替え
const toggleLightDarkMode = (function () {
  let db_body = document.querySelector('#db-body'),
    triggler = document.querySelector('.btn-mode');
  let darkMode = false;
  let toggleMode = function () {
    if (!darkMode) {
      db_body.classList.add('--dm');
      darkMode = true;
    } else {
      db_body.classList.remove('--dm');
      darkMode = false;
    }
  };
  let bindActions = function () {
    triggler.addEventListener('click', toggleMode, false);
  };
  let init = function () {
    bindActions();
  };
  return { init: init };
})();
toggleLightDarkMode.init();
