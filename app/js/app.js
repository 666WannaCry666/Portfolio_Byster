const videoList = [
  'cNTo-vSwTss',
  'pXzISdEzriM',
  'woRRJaVdn0c',
  '6pf2yCMRJDk',
  'JXbQaxOAk2E',
  'ua2KP57xclg'
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

function titleLoad(elem) {
  let url = 'https://noembed.com/embed?url=https://www.youtube.com/watch?v=' + elem;
  
  var value= $.ajax({ 
    url: url, 
    async: false
  }).responseText;

  let val = JSON.parse(value);
  return val.title;
}

function renderVideoContainers(videoList) {
  $.each(videoList, function (index, elem) {

    const videoElement = $(`
      <div id="video-container">
        <div class="video__slider-container">
          <div id=${elem} class="video-preview" style="background-image: url(//i.ytimg.com/vi/${elem}/hqdefault.jpg);" >
            <img class="video-preview__btn" src="image/main/youtube-play-icon.svg">
          </div>
        </div>
        <h1 class="video-container__title">${titleLoad(elem)}</h1>
      </div>
    `);

    $('#selected_video').append(videoElement);
  });
}

function renderVideoPreviews(videoList) {
  $.each(videoList, function (index, elem) {

    const videoElement = $(`
      <div>
        <div class="video__slider-item">
          <div id=${elem} class="video-preview" style="background-image: url(//i.ytimg.com/vi/${elem}/hqdefault.jpg);" >
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
  renderVideoPreviews(videoList);
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

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false
        }
      }
    ]
  });

}


const newHeader = $(`
  <div class="container">
    <div class="header__inner">
      <nav class="header-nav" id="headerNav">
        <button class="header-btn-menu--close" id="btnMenuClose"><img src="image/btn-close.svg" alt="" width="32" height="29"></button>
        <a class="header-nav__link" data-i18n="header_link-main" href="https://byster.ru/"></a>
        <a class="header-nav__link" data-i18n="header_link-buy" href="https://vk.com/im?sel=-161908322" target="_blank"></a>
        <a class="header-nav__link" data-i18n="header_link-VK" href="https://vk.com/byster_wow" target="_blank"></a>
        <a class="header-nav__link" data-i18n="header_link-reviews" href="#" id="reviewLink"></a>
              <a class="header-nav__link header-nav__link--right" data-i18n="header_link-devs" href="https://byster.ru/developers"></a>
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

  $('.language').on('click', function(e){
    e.preventDefault();

    if ($('.lang__container').css('visibility') === "collapse")
      $('.lang__container').css('visibility', 'visible');
    else
      $('.lang__container').css('visibility', 'collapse');
  })

  $('.lang-switch').on('click', function(e){
    e.preventDefault();

    $('.lang__container').css('visibility', 'collapse');
  })

  $('.lang-switch').hover(function() {
    $(this).css('background-color', '#303030');
  }, function() {
    $(this).css('background-color', 'transparent');
  })
