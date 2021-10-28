jQuery(document).ready(function() {
    var update_texts = function() { $('body').i18n() };

    let headerRus = "../jquery_i18n/localization/header/ru.json";
    let headerEng = "../jquery_i18n/localization/header/renu.json"

    $.i18n().load({
      'en': '../jquery_i18n/localization/funpay/en.json',
      'ru': '../jquery_i18n/localization/funpay/ru.json'
    });

    update_texts();

    let count;
    const lang = navigator.language;
    
    if (localStorage.getItem('language')) {
      $.i18n().locale = localStorage.getItem('language');
      update_texts();

      if ($.i18n().locale === "en") {
        $(document).prop('title', "Download");
        count = 1;
      }
      else if ($.i18n().locale === "ru") {
        $(document).prop('title', "Скачать");
        count = 0;
      }
    }
    else {
      if (lang === "ru-RU" || lang === "ru" || lang === "be-BY" || lang === "be" || lang === "kk-KZ" || lang === "kk" || lang === "uk-UA" || lang === "uk") {
        $.i18n().locale = "ru";
        update_texts();
        $(document).prop('title', "Скачать");
        count = 0;
      }
      else {
        $.i18n().locale = "en";
        update_texts();
        $(document).prop('title', "Download");
        count = 1;
      }
    }

    $('.lang-switch').click(function(e) {
        e.preventDefault();

        if (count === 0) {
            $.i18n().locale = "en";
            count = 1;
            $(document).prop('title', "Download");
            localStorage.setItem('language', $.i18n().locale);
        }
        else if (count === 1) {
            $.i18n().locale = "ru";
            count = 0;
            $(document).prop('title', "Скачать");
            localStorage.setItem('language', $.i18n().locale);
        };

        localStorage.setItem('language', $.i18n().locale);
        update_texts();
    });
  });