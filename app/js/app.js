const videoList = [
  'cNTo-vSwTss',
  'JXbQaxOAk2E',
  'JXbQaxOAk2E',
  '6pf2yCMRJDk',
  'JXbQaxOAk2E'
];

// Объекты YT, чтобы можно было ставить на паузу видео
let objectsYT = [];

function roundNumber(number) {
  // округление значений, меньших 10

  if (number < 10) {
    return `0${number}`
  }
  return number
}

function dateParse(msec) {
  const date = new Date(msec);
  const year = date.getFullYear();
  const month = roundNumber(date.getMonth() + 1);
  const day = roundNumber(date.getDate());

  return `${day}.${month}.${year}`
}

function renderReviews(data) {
  $.each(data, function (index, elem) {
    let img = '';
    let href = '';

    switch (elem.source) {
      case 'byster': {
        img = '<div class="review-item__img review-item__img--buster">Byster</div>';
        break;
      }
      case 'VK': {
        href = `href="${elem.url}" target="_blank"`;
        img = `<img src="./image/main/logo-vk.svg" alt="" class="review-item__img review-item__img--vk">`;
        break;
      }
      // funpay
      default: {
        href = `href="${elem.url}" target="_blank"`;
        img = `<img src="./image/main/logo-funpay.svg" alt="" class="review-item__img">`;
        break;
      }
    }

    const element = $(`
      <a class="review-item" ${href}>
        <div class="review-item__top">
          <div class="review-item__name">${elem.author}</div>
          ${img}
        </div>
        <div class="review-item__date">${dateParse(elem.review_date * 1000)}</div>
        <div class="review-item__text">${elem.text}</div>
      </a>
    `);

    $('#reviewInner').append(element);
  });
}

function dataLoad(offset, limit) {
  $.get(`https://api.byster.ru/site/comments?offset=${offset}&limit=${limit}`, function (response) {
    renderReviews(response)
  })
}

function renderVideoContainers(videoList) {
  $.each(videoList, function (index, elem) {

    const videoElement = $(`
      <div>
        <div class="video__slider-item">
          <div id=${elem} class="video-preview" style="background-image: url(//img.youtube.com/vi/${elem}/maxresdefault.jpg);" >
            <img class="video-preview__btn" src="image/main/youtube-play-icon.svg">
          </div>
        </div>
      </div>
    `);

    $('#video').append(videoElement);
  });
}

$(document).ready(function () {
  const headerNav = $('#headerNav');

  $('#btnMenu').click(function () {
    headerNav.slideDown('fast');
    headerNav.css("display", "flex")
  });

  $('#btnMenuClose').click(function () {
    headerNav.slideUp('fast');
  });

  $('#what-can__slider').slick({
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          dots: false,
        }
      },
    ]
  });

  // Рендер контейнеров для видео
  renderVideoContainers(videoList);

  // Загрузка отзывов (раскомментить, когда будут нужны отзывы)

  const limit = 10;
  let offset = 0;
  dataLoad(offset, limit);

  $(window).on("scroll", function () {
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      offset += 10;
      dataLoad(offset, limit);
    }
  });

  $('#reviewLink').on('click', function (e) {
    $('html,body').stop().animate({scrollTop: $('#reviewSection').offset().top - 50}, 1000);
    e.preventDefault();
  });

});

function onPlayerReady(eventPlayer) {
  $('#video').on('afterChange', function (event, slick, nextSlide) {
    if (eventPlayer.target.getPlayerState() === 1) {
      eventPlayer.target.pauseVideo();
    }
  });
}

// Video
function onYouTubeIframeAPIReady() {

  $('.video-preview').click(function () {
    // при клике на картинку добавляем объект iframe
    const objectYT = new YT.Player(this.id, {
      videoId: this.id,
      events: {
        'onReady': onPlayerReady,
      }
    });

    objectsYT.push(objectYT)
  })

  $('#video').slick({
    dots: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          dots: true,
        }
      },
    ]
  });

}


const newHeader = $(`
  <div class="container">
    <div class="header__inner">
      <nav class="header-nav" id="headerNav">
        <button class="header-btn-menu--close" id="btnMenuClose"><img src="image/btn-close.svg" alt="" width="32" height="29"></button>
        <a class="header-nav__link" href="https://byster.ru/">Главная</a>
        <a class="header-nav__link" href="https://vk.com/im?sel=-161908322" target="_blank">Купить</a>
        <a class="header-nav__link" href="https://vk.com/byster_wow" target="_blank">ВКонтакте</a>
        <a class="header-nav__link" href="#" id="reviewLink">Отзывы</a>
        <a class="header-nav__link header-nav__link--right" href="https://byster.ru/developers">Разработчикам</a>
      </nav>
      <div class="header__logo">
        <a href="https://byster.ru/">
          <img class="logo" src="./image/main/logo.png" alt="logo">
        </a>
      </div>
      <button class="header-btn-menu" id="btnMenu">
        <div class="header-btn-menu__item"></div>
        <div class="header-btn-menu__item"></div>
        <div class="header-btn-menu__item"></div>
      </button>
    </div>
  </div>
  `);

