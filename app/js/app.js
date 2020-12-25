const videoList = [
  'cNTo-vSwTss',
  'pXzISdEzriM',
  'woRRJaVdn0c',
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
  const month = roundNumber(date.getMonth());
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
      case 'vk': {
        href = `href="${elem.url}" target="_blank"`;
        img = `<img src="./image/logo-${elem.source}.svg" alt="" class="review-item__img review-item__img--vk">`;
        break;
      }
      // funpay
      default: {
        href = `href="${elem.url}" target="_blank"`;
        img = `<img src="./image/logo-${elem.source}.svg" alt="" class="review-item__img">`;
        break;
      }
    }

    const element = $(`
      <a class="review-item" ${href}>
        <div class="review-item__top">
          <div class="review-item__name">${elem.author}</div>
          ${img}
        </div>
        <div class="review-item__date">${dateParse(elem.date * 1000)}</div>
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

    const video = $(`
      <div>
        <div class="video__slider-item">
          <div id=${elem}></div>
        </div>
      </div>
    `);

    let a = `<iframe src="https://www.youtube.com/embed/${elem}" frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>`

    $('#video').append(video);
  });
}

$(document).ready(function () {
  const headerNav = $('#headerNav');

  $('#btnMenu').click(function () {
    headerNav.slideDown('fast');
  });

  $('#btnMenuClose').click(function () {
    headerNav.slideUp('fast');
  });

  // Рендер контейнеров для видео
  renderVideoContainers(videoList);

  // Загрузка отзывов
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

  $.each(videoList, function (index, elem) {
    const objectYT = new YT.Player(elem, {
      videoId: elem,
      events: {
        'onReady': onPlayerReady,
      }
    });

    objectsYT.push(objectYT)
  });

  $('#video').slick({
    dots: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
        }
      },
    ]
  });

}
