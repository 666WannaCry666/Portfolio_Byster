let button = document.getElementById('load__link');
let text = document.getElementById('load-process');

button.onclick = function() {
    this.style.display = 'none';
    text.style.display = 'block';
}

const anchor = document.getElementById('load__link')



anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const mainTitle = anchor.getAttribute('href').substr(1)

    document.getElementById('mainTitle').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})



