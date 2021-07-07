// Замена элементов
let button = document.getElementById('load__link');
let text = document.getElementById('load-process');

button.onclick = function() {
    this.style.display = 'none';
    text.style.display = 'block';
}

// Скролл до инструкции
const anchor = document.getElementById('load__link')


anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.getElementById('mainTitle').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

    document.location.href = "https://byster.ru/";
})

window.history.pushState(null, null, '/go');
