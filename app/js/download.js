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

    let link = document.createElement("a");
    link.setAttribute('download', '');
    link.href = '/download';
    document.body.appendChild(link);
    link.click();
    link.remove();
}
