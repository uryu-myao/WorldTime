'use strict';

const db_body = document.querySelector('#db-body'),
  triggler_darkMode = document.querySelector('.btn-mode'),
  triggler_search = document.querySelector('.btn-new');

// Dark Mode 切り替え
const toggleDarkMode = (function () {
  let active = false;
  let toggleMode = function () {
    if (!active) {
      db_body.classList.add('--dm');
      active = true;
    } else {
      db_body.classList.remove('--dm');
      active = false;
    }
  };
  let bindActions = function () {
    triggler_darkMode.addEventListener('click', toggleMode, false);
  };
  let init = function () {
    bindActions();
  };
  return { init: init };
})();
toggleDarkMode.init();

const toggleSearch = (function () {
  let active = false;
  let toggleMode = function () {
    if (!active) {
      db_body.classList.add('--search');
      active = true;
    } else {
      db_body.classList.remove('--search');
      active = false;
    }
  };
  let bindActions = function () {
    triggler_search.addEventListener('click', toggleMode, false);
  };
  let init = function () {
    bindActions();
  };
  return { init: init };
})();
toggleSearch.init();

// WorldTimeAPI
// http://worldtimeapi.org/
// https://app.abstractapi.com/dashboard/
// const errorMessage = document.querySelector('#errorMessage');
const renderError = function (msg) {
  errorMessage.innerHTML = '';
  errorMessage.insertAdjacentText('afterbegin', msg);
  errorMessage.style.opacity = 1;
};

const getJSON = function (url) {};

const searchShow = async (query) => {
  const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=be0e8b0c64a84b6a88eb4277081eec70&location=${query}`;
  fetch(url)
    .then((response) => {
      if (response.type === 'cors') {
        throw new Error(`Please try some nearby cities`);
      }
      response.json();
    })
    .then((jsonData) => {
      // 何かを実行する
      console.log(jsonData);

      errorMessage.innerHTML = '';
    })
    .catch((err) => {
      // console.log(err);
      renderError(`Oops, ${err.message}...`);
    });
};

// Search logic
let searchTimeoutToken = 0;
const searchFieldElement = document.querySelector('#search-field');
searchFieldElement.onkeyup = (event) => {
  clearTimeout(searchTimeoutToken);
  if (searchFieldElement.value.trim().length === 0) {
    return;
  }
  searchTimeoutToken = setTimeout(() => {
    searchShow(searchFieldElement.value);
  }, 200);
};

// DATA
const timezone1 = {
  city: 'kyoto',
  time: '22:45',
  addr: 'jst',
  hlc: '+9',
  week: 'mon',
  date: '22',
  month: 'fri',
};
const timezones = [timezone1];

// Display elements
const timezonesContainer = document.querySelector('.db-body-inner');

const displayTimezones = function (tzs) {
  timezonesContainer.innerHTML = '';

  tzs.forEach(function (tz, i) {
    const html = /*html*/ `
      <div class="db-item --night">
        <div class="location"><p class="city">${tz.city}</p></div>
        <div class="time"><p class="clock">23:45</p></div>
        <div class="details">
          <div class="details-l">
            <p class="hlc"></p>
            <span class="bar"></span>
            <p class="hlc">utc<span></span></p>
          </div>
          <div class="details-r">
            <p class="week">mon</p>
            <span class="bar"></span>
            <p class="month">30 jul</p>
          </div>
        </div>
      </div>
    `;
    timezonesContainer.insertAdjacentHTML('afterbegin', html);
  });
};
displayTimezones(timezones);
