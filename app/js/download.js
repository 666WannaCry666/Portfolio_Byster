// Замена элементов
let button = document.getElementById('load__link');
let text = document.getElementById('load-process');

(function() {
    let link_href = button.href;

    button.href = link_href + `?ref=${localStorage.getItem("ref")}`;
}())

button.onclick = function() {
    this.style.display = 'none';
    text.style.display = 'block';
    document.getElementById('mainTitle').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
