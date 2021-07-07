// Замена элементов
let button = document.getElementById('load__link');
let text = document.getElementById('load-process');

button.onclick = function() {
    this.style.display = 'none';
    text.style.display = 'block';
    document.getElementById('mainTitle').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

}

window.history.pushState(null, null, '/go');

