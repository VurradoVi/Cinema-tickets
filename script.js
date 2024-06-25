const btnScroll = document.getElementById('scroll-button')
const h3 = document.querySelectorAll('.schedule__block-h3')
const openTrailer = document.getElementById('openTrailer')
const closeTrailer = document.getElementById('closeTrailer')
const blocks = document.querySelectorAll('.schedule__block')
const primarybtn = document.querySelectorAll('.primarybtn')
const closeSchedule = document.getElementById('closeSchedule')
const place = document.getElementById('place-grid')
const forwardBtn = document.getElementById('forward-btn')


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
        document.getElementById('price').innerHTML = ``
        site()
    });
});
//???


closeSchedule.addEventListener('click', function () {
    document.getElementById('schedule-modal').classList.remove('open')
    place.innerHTML = ''
    document.getElementById('place-info').innerHTML = ''
    count = 0
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
    let total = 300
    let count = 0
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j <= 14; j++) {
            let paragraph = document.createElement('p')
            paragraph.classList.add('place-site')
            paragraph.textContent = `${j}`;
            paragraph.dataset.row = i;
            paragraph.dataset.seat = j;
            paragraph.addEventListener('click', function () {
                forwardBtn.removeAttribute('disabled')
                let infoElement = document.getElementById('place-info');
                if (!this.classList.contains('selected')) {
                    count++
                    this.style.backgroundColor = 'white'
                    this.style.color = 'black'
                    this.style.border = '1px solid blue'
                    this.style.transform = 'scale(1.3)'
                    this.style.lineHeight = '15px'
                    this.classList.add('selected');
                    let spanElement = document.createElement('span');
                    spanElement.innerHTML = `${this.dataset.row} ряд, ${this.dataset.seat} место`;
                    infoElement.appendChild(spanElement);
                    let x = document.createElement('h6')
                    x.textContent = 'x'
                    x.classList.add('x-btn')
                    x.addEventListener('click', function () {
                        paragraph.style.backgroundColor = '';
                        paragraph.style.color = '';
                        paragraph.style.border = '';
                        paragraph.style.transform = '';
                        paragraph.style.lineHeight = '';
                        paragraph.classList.remove('selected');
                        infoElement.removeChild(spanElement);
                        count--
                        document.getElementById('price').innerHTML = `${count} билет(а): ${total * count}р`
                    })
                    spanElement.appendChild(x) //кнопка чтобы убрать билет
                } else {
                    this.style.backgroundColor = '';
                    this.style.color = '';
                    this.style.border = '';
                    this.style.transform = '';
                    this.style.lineHeight = '';
                    this.classList.remove('selected');
                    infoElement.removeChild(infoElement.lastChild);
                    count--
                    document.getElementById('price').innerHTML = `${count} билет(а): ${total * count}р`
                }
                document.getElementById('price').innerHTML = `${count} билет(а): ${total * count}р`
            });
            place.appendChild(paragraph)
            if (j === 10 || j === 11) {
                paragraph.style.visibility = 'hidden'
            }
        }
    }
}



