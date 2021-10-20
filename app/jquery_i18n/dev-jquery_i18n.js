jQuery(document).ready(function() {
    var update_texts = function() { $('body').i18n() };
    $.i18n().load({
        'en': {
          "header_link-main": "Home",
          "header_link-buy": "Buy",
          "header_link-VK": "VK",
          "header_link-reviews": "Reviews",
          "header_link-devs": "Developers",
          "intro-title__dev--1": "Do you want to develop on the Byster platform?",
          "submit__btn": "Submit your application",
          "dev-first-bottom__title-use": "Use",
          "dev-first-bottom__text-use": "Access to a powerful and convenient CoreAPI for developing your rotations.",
          "dev-first-bottom__title-customize": "Customize",
          "dev-first-bottom__text-customize": "Possibilities. Potential. Fantasy. Do what you want and how you want, with us you can do it with minimal costs.",
          "dev-first-bottom__title-earn": "Earn",
          "dev-first-bottom__text-earn": "You can write rotations for yourself, automating your gameplay.",
          "what-can__title": "What can our platform do? Let's show it now :)",
          "slider-elem__text-protection": "All rotations and the core are well protected from hacking. You do not have to worry about your intellectual property, we protect it well and will not allow anyone to steal it.",
          "slider-elem__text-usability": "Our API is easy to use. You don't need to write your own functions to get something, for sure we already have a convenient implementation for you.",
          "slider-elem__text-interaction": "The use of objects and abilities, both in target and in area. Interact with the world at any level.",
          "slider-elem__text-predicts": "The Byster constantly analyzes the situation around him and can predict where the unit will be in a couple of seconds, how much HP or MP it will have, and how long it will die.",
          "slider-elem__text-context": "It will allow you to understand how to behave in any situation. What units to beat, who to bring down the caste, is it possible to squeeze out, etc.",
          "slider-elem__text-unit": "A separate API allows you to access any unit data. For example, his position, where he is looking, flags, checking buffs.",
          "slider-elem__text-spellitem": "A separate API for abilities and spells allows you to get any information with the 1st command.",
          "slider-elem__text-menu": "Convenient built-in menu with built-in support for localization in many languages and saving the current state.",
          "slider-elem__text-movement": "The ability to move, turn as you please and find the best path.",
          "slider-elem__text-objectmanager": "Get access to any unit.",
          "slider-elem__text-optimization": "Our kernel is well optimized and therefore loses almost no FPS when using it.",
          "slider-elem__text-drawing": "We have a drawing API for you. For example, this allows you to show where the magician casts his pillar or where the professor's dumpling is flying.",
          "intro-title__dev--2": "Ready to get started to development?",
          },
        'ru': {
          "header_link-main": "Главная",
          "header_link-buy": "Купить",
          "header_link-VK": "ВКонтакте",
          "header_link-reviews": "Отзывы",
          "header_link-devs": "Разработчикам",
          "intro-title__dev--1": "Хочешь разрабатывать на платформе Byster?",
          "submit__btn": "Оставить заявку",
          "dev-first-bottom__title-use": "Пользуйся",
          "dev-first-bottom__text-use": "Доступ к мощному и удобному CoreAPI для разработки своих ротаций.",
          "dev-first-bottom__title-customize": "Кастомизируй",
          "dev-first-bottom__text-customize": "Возможности. Потенциал. Фантазия. Делайте что хотите и как хотите, с нами вы это можете с минимальными затратами.",
          "dev-first-bottom__title-earn": "Заработай",
          "dev-first-bottom__text-earn": "Можно писать ротации для себя, автоматизируя свой игровой процесс.",
          "what-can__title": "Что умеет наша платформа? Сейчас покажем:)",
          "slider-elem__text-protection": "Все ротации и ядро хорошо защищены от взлома. Можете  не беспокоиться о своей интеллектуальной собственности, мы её хорошо защищаем и никому не позволим ее украсть.",
          "slider-elem__text-usability": "Наше API удобно в использовании. Вам не нужно писать свои функции для получения  чего-то, наверняка у нас уже есть удобная реализация для вас.",
          "slider-elem__text-interaction": "Использование  предметов и способностей, как в цель, так и по площади. Взаимодействие с миром на любом уровне.",
          "slider-elem__text-predicts": "Бустер постоянно анализирует ситуацию вокруг себя и может предугадать, где будет юнит через пару секунд, сколько у него будет HP или MP и через сколько он умрёт.",
          "slider-elem__text-context": "Позволит понять как себя вести в любой ситуации. Каких юнитов бить, кому сбить каст,  можно ли прожаться и т.д.",
          "slider-elem__text-unit": "Отдельное API позволяет получать доступ к любым данным о юните. Например, его позиция, куда он смотрит, флаги, проверка бафов.",
          "slider-elem__text-spellitem": "Отдельное  API для способностей и заклинаний позволяет получить любую информацию 1-ой командой.",
          "slider-elem__text-menu": "Удобное встроенное меню со встроеной поддержкой локализации на многие языки и сохранением текущего состояния.",
          "slider-elem__text-movement": "Возможность передвигаться, поворачиваться как вам угодно и поиск оптимального пути.",
          "slider-elem__text-objectmanager": "vПолучить доступ к любому юниту.",
          "slider-elem__text-optimization": "Наше ядро хорошо оптимизировано и поэтому почти не теряет FPS при его использовании.",
          "slider-elem__text-drawing": "У нас есть API для рисования чего-либо для вас. Например, это позволяет показать, куда кастует маг свой столб или куда летит пельмень профессора.",
          "intro-title__dev--2": "Готовы приступить к разработке?",
          }
    });

    update_texts();

    let count = 0;

    $('.lang-switch').click(function(e) {
        e.preventDefault();

        if (count === 0) {
            $.i18n().locale = "en";
            count = 1;
            $(this).html("RUS");
        }
        else if (count === 1) {
            $.i18n().locale = "ru";
            count = 0;
            $(this).html("ENG");
        };
        update_texts();
    });
  });