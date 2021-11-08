jQuery(document).ready(function() {
    var update_texts = function() { $('body').i18n() };
    $.i18n().load({
        'en': '../jquery_i18n/localization/contacts/en.json',
        'ru': '../jquery_i18n/localization/contacts/ru.json'
    }).done( function() {
      update_texts();
  
      const lang = navigator.language;
  
      if (localStorage.getItem('language')) {
        $.i18n().locale = localStorage.getItem('language');
        update_texts();
  
        if ($.i18n().locale === "en") {
          $('.language__image').attr('src', '../image/flags/us.svg');
        }
        else if ($.i18n().locale === "ru") {
          $('.language__image').attr('src', '../image/flags/ru.svg');
        }
      }
      else {
        if (lang === "ru-RU" || lang === "ru" || lang === "be-BY" || lang === "be" || lang === "kk-KZ" || lang === "kk" || lang === "uk-UA" || lang === "uk") {
          $.i18n().locale = "ru";
          update_texts();
          $('.language__image').attr('src', '../image/flags/ru.svg');
        }
        else {
          $.i18n().locale = "en";
          update_texts();
          $('.language__image').attr('src', '../image/flags/us.svg');
        }
      }
    });;
  
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
  
    $('.lang-switch').click(function(e) {
        e.preventDefault();
  
        $.i18n().locale = $(this).data('locale');
  
        let languageIn = $(this).html();
        $('.language').html(languageIn);
  
        localStorage.setItem('language', $.i18n().locale);
  
        update_texts();
    });
  });
