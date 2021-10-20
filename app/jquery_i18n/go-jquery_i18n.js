jQuery(document).ready(function() {
    var update_texts = function() { $('body').i18n() };
    $.i18n().load({
        'en': {
            "load__btn": "Download",
            "loading-process__content--1": "Byster is loading...",
            "loading-process__content--2": "\"Scripts. Scripts. Scripts\"",
            "instruction__main-title": "INSTRUCTIONS",
            "instruction__text-1": "Download and unpack Byster_Loader.exe in any place convenient for you. Run Byster_Loader.exe.",
            "instruction__title-2": "Registration with Byster",
            "instruction__text-2": "A registration window will open in front of you. Come up with a username and password, you can ask the referral code from the one who told you about Byster or leave it blank. Click Let's Go!",
            "instruction__title-3": "Getting a free test",
            "instruction__text-3": "After you have successfully registered with Byster, you need to write to the personal messages of our VK group.",
            "instruction__title-4": "Launching Byster in the game",
            "instruction__text-4": "To start Byster in the game, first of all, you must go to the character. Next, the nickname of this character will appear in Byster. After clicking on the nickname, a list of available specs that you bought or took for testing will open. Press 2 times on rotation and open the game.",
            "instruction__title-5": "Setting up the game menu",
            "instruction__text-5": "After you have launched Byster in the game, you need to configure it, namely, place the checkboxes in the way that is more convenient for you (when you hover over the checkbox, there will be information about what it changes). For Byster to begin its work, you need to engage in combat with a goal. Also, for more convenient use of Byster, you can make macros by clicking on the checkbox while holding down the ALT key. The macro will appear in character macros.",
            "instruction__title-video": "Video instruction"
          },
        'ru': {
            "load__btn": "Скачать",
            "loading-process__content--1": "Byster загружается...",
            "loading-process__content--2": "\"Скрипты. Скрипты. Скрипты\"",
            "instruction__main-title": "ИНСТРУКЦИЯ",
            "instruction__text-1": "Скачать и распаковать Byster_Loader.exe в любом удобном для вас месте. Запустить Byster_Loader.exe.",
            "instruction__title-2": "Регистрация в Byster",
            "instruction__text-2": "Перед вами откроется окно регистрации. Придумайте логин и пароль, реферальный код можно спросить у того, кто рассказал вам о Byster или оставить пустым. Жмем Поехали!",
            "instruction__title-3": "Получение бесплатного теста",
            "instruction__text-3": "После того как вы успешно зарегистрировались в Byster'е, вам необходимо написать в личные сообщения нашей группы ВК.",
            "instruction__title-4": "Запуск Byster'а в игре",
            "instruction__text-4": "Что бы запустить Byster в игре в первую очередь вы должны зайти на персонажа. Далее в Byster'е появится ник этого персонажа. После клика на ник откроется список доступных спеков, которые вы купили или взяли на тест. Нажмите 2 раза на ротацию и откройте игру.",
            "instruction__title-5": "Настройка игрового меню",
            "instruction__text-5": "После того как вы запустили Byster в игре, нужно его настроить, а именно расставить галочки так, как вам удобнее (при наведении на галочку, будет информация о том, что она меняет). Чтобы Byster начал свою работу, необходимо вступить в бой с целью. Так же для более удобного использования Byster'a вы можете сделать макросы, нажав на галочку с зажатой клавишей ALT. Макрос появится в макросах персонажа.",
            "instruction__title-video": "Видеоинструкция"
          }
    });

    update_texts();

    let count = 0;

    $('.lang-switch').click(function(e) {
        e.preventDefault();

        if (count === 0) {
            $.i18n().locale = "en";
            count = 1;
            $(this).html("RU");
        }
        else if (count === 1) {
            $.i18n().locale = "ru";
            count = 0;
            $(this).html("ENG");
        };
        update_texts();
    });
  });