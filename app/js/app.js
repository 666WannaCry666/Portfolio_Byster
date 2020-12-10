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
  $('#reviewInner').empty();

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

function dataLoad(limit) {
  $.get(`https://api.byster.ru/site/comments?offset=0&limit=${limit}`, function (response) {
    renderReviews(response)
  })
}

$(document).ready(function () {
  const headerNav = $('#headerNav');

  $('#btnMenu').click(function () {
    headerNav.slideDown('fast');
  });

  $('#btnMenuClose').click(function () {
    headerNav.slideUp('fast');
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

  let limit = 5;
  dataLoad(limit);

  $(window).on("scroll", function () {
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      limit += 5;
      dataLoad(limit);
    }
  });
});
