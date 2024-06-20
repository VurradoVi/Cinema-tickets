const btnScroll = document.getElementById('scroll-button')
const h3 = document.querySelectorAll('.schedule__block-h3')
const openTrailer = document.getElementById('openTrailer')
const closeTrailer = document.getElementById('closeTrailer')
const blocks = document.querySelectorAll('.schedule__block')
const primarybtn = document.querySelectorAll('.primarybtn')
const closeSchedule = document.getElementById('closeSchedule')
const place = document.getElementById('place-grid')
let clickCount = 0;

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
    document.getElementById('place-info').innerHTML = ''
    clickCount = 0
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

    for (let i = 1; i < 11; i++) {
        for (let j = 1; j <= 14; j++) {
            let paragraph = document.createElement('p')
            paragraph.classList.add('place-site')
            paragraph.textContent = `${j}`;
            paragraph.addEventListener('click', function () {
                    this.style.backgroundColor = 'white'
                    this.style.color = 'black'
                    this.style.border = '1px solid blue'
                    this.style.transform = 'scale(1.3)'
                    this.style.lineHeight = '15px'
                    let spanElement = document.createElement('span');
                    let infoElement = document.getElementById('place-info');
                    spanElement.textContent = `${i} ряд, ${j} место`
                    infoElement.appendChild(spanElement);
                //  else {
                //     this.style.backgroundColor = ''
                //     this.style.color = ''
                //     this.style.border = ''
                //     this.style.transform = ''
                //     this.style.lineHeight = ''
                //     infoElement.removeChild(spanElement);
                //     clickCount = 0
                // }
            })
            place.appendChild(paragraph)
            if (j === 10 || j === 11) {
                paragraph.style.visibility = 'hidden'
            }
        }
    }
}

