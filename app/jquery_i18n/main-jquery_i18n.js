jQuery(document).ready(function() {
    var update_texts = function() { $('body').i18n() };
    $.i18n().load({
        'en': {
          "header_link-main": "Home",
          "header_link-buy": "Buy",
          "header_link-VK": "VK",
          "header_link-reviews": "Reviews",
          "header_link-devs": "Developers",
          "intro__title": "Byster - Auto PvE",
          "intro__text": "Byster is a multifunctional PvE bot that has many features. Booster heals, tanks, deals damage. Tracks your procs, runs trinkets, professions, defends, changes the rotation depending on the priority and phase of the boss, for greater usefulness in the raid. There are functions of autobuff, AoE and solo modes, projectiles and defaults, auto-removal of weapons on a lady, dispel and much more, are you interested? Click on the button below!",
          "try__button": "Try it for free",
          "title-video": "Videos",
          "title-advantages": "Advantages",
          "advantage__name-anonymity": "Anonymity",
          "advantage__name-anonymity__text": "Information about our clients is never disclosed to third parties.",
          "advantage__name-protection": "Protection",
          "advantage__name-protection__text": "Unique protection from Warden, will not allow your account to be banned. Zero bans in 2 years!",
          "advantage__name-convenience": "Convenience",
          "advantage__name-convenience__text": "You do not need to configure anything, everything is already done for you, everything is simple and easy!",
          "advantage__name-functional": "Functional",
          "advantage__name-functional__text": "The development team regularly releases new, unique functionality so that you would always be at the top of Recount",
          "advantage__name-support": "Support",
          "advantage__name-support__text": "Experienced support specialists are always ready to answer your questions and help with problems that arise.",
          "advantage__name-quality": "Quality",
          "advantage__name-quality__text": "In all areas of the project, professionals work in their field, thanks to which you get a product of the best quality.",
          "title-subscription": "Subscription",
          "subscribe-item__subname--1": "1 Specialization",
          "subscribe-item__subname--2": "1 Month",
          "subscribe-item__subname--aoe": "All classes",
          "title-reviews": "Reviews"
          },
        'ru': {
          "header_link-main": "Главная",
          "header_link-buy": "Купить",
          "header_link-VK": "ВКонтакте",
          "header_link-reviews": "Отзывы",
          "header_link-devs": "Разработчикам",
          "intro__title": "Byster - Авто PvE",
          "intro__text": "Byster - это многофункциональный бот для PvE, который имеет большое количество функций. Бустер хилит, танчит, наносит урон. Отслеживает ваши проки, прожимает тринькеты, профессии, дефается, меняет ротацию в зависимости от приоритета и фазы босса, для большей полезности в рейде. Присутствуют функции автобафа, аое и соло режима, прожимок и дефов, авто-снятие оружие на леди, диспел и многое другое, заинтересовался? Жми на кнопку ниже!",
          "try__button": "Попробовать бесплатно",
          "title-video": "Видео",
          "title-advantages": "Преимущества",
          "advantage__name-anonymity": "Анонимность",
          "advantage__name-anonymity__text": "Информация о наших клиентах никогда не раскрывается третьим лицам.",
          "advantage__name-protection": "Защита",
          "advantage__name-protection__text": "Уникальная защита от Warden, не позволит забанить ваш аккаунт. Ноль банов за 2 года!",
          "advantage__name-convenience": "Удобство",
          "advantage__name-convenience__text": "Вам не нужно ничего настраивать, все уже сделано за вас, все просто и легко!",
          "advantage__name-functional": "Функционал",
          "advantage__name-functional__text": "Команда разработчиков регулярно выпускает новый, уникальный функционал, что бы вы всегда были в топе Recount'a",
          "advantage__name-support": "Поддержка",
          "advantage__name-support__text": "Опытные специалисты поддержки всегда готовы ответить на ваши вопросы и помочь в решении возникающих проблем.",
          "advantage__name-quality": "Качество",
          "advantage__name-quality__text": "Во всех областях проекта работают профессиональны своего дела, благодаря чему вы получаете продукт лучшего качества.",
          "title-subscription": "Подписка",
          "subscribe-item__subname--1": "1 Специализация",
          "subscribe-item__subname--2": "1 Месяц",
          "subscribe-item__subname--aoe": "Все классы",
          "title-reviews": "Отзывы"
          }
    });

    update_texts();

    $('.lang-switch').click(function(e) {
      e.preventDefault();
      $.i18n().locale = $(this).data('locale');
      update_texts();
    });
  });