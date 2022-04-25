// Замена элементов
let button = document.getElementById('load__link');
let text = document.getElementById('load-process');

(function() {
    let ref = localStorage.getItem("ref");
    if (ref != null)
        button.href = `/download?ref=${ref}`;
}())

button.onclick = function() {
    this.style.display = 'none';
    text.style.display = 'block';
    document.getElementById('mainTitle').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
