const btnScroll = document.getElementById('scroll-button')
const h3 = document.querySelectorAll('.schedule__block-h3')
const openTrailer = document.getElementById('openTrailer')
const closeTrailer = document.getElementById('closeTrailer')
const blocks = document.querySelectorAll('.schedule__block')
const primarybtn = document.querySelectorAll('.primarybtn')
const closeSchedule = document.getElementById('closeSchedule')
const place = document.getElementById('place-grid')

btnScroll.addEventListener('click', function (event) {
    event.preventDefault()
    const target = document.getElementById('sec1')
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    })
})

h3.forEach(function (h3) {
    h3.addEventListener('click', function () {
        text = h3.textContent
        window.open(`https://yandex.ru/maps/193/voronezh/search/${text}%20/`, '_blank')
    })
});


//???
primarybtn.forEach((primarybtn) => {
    primarybtn.addEventListener('click', function (event) {
        document.getElementById('schedule-modal').classList.add('open')
        // Получение текста кнопки
        const btnText = event.target.textContent;

        // Получение родительского блока.schedule__block
        const parentBlock = event.currentTarget.closest('.schedule__block');

        // Получение заголовка <h3> внутри родительского блока
        const h3Text = parentBlock.querySelector('.schedule__block-h3').textContent;

        // Вывод текста кнопки и заголовка <h3> and h2
        document.getElementById('schedule-h3').innerHTML = `${h3Text}`
        document.getElementById('schedule-h4').innerHTML = `Сегодня в ${btnText}`
        site()
    });
});
//???


closeSchedule.addEventListener('click', function () {
    document.getElementById('schedule-modal').classList.remove('open')
    place.innerHTML = ''
})

openTrailer.addEventListener('click', function () {
    document.getElementById('trailer-modal').classList.add('open')
})

closeTrailer.addEventListener('click', function () {
    document.getElementById('trailer-modal').classList.remove('open')
    const video = document.getElementById('video')
    video.pause();
    video.currentTime = 0;
})

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document.getElementById('trailer-modal').classList.remove('open')
    }
});

function site() {
    for (let i = 1; i < 141; i++) {
        let paragraph = document.createElement('p')
        paragraph.classList.add('place-site')
        paragraph.textContent = `${i}`;
        place.appendChild(paragraph)
        
    }
}