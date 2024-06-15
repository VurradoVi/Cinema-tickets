btnScroll = document.getElementById('scroll-button')
h3 = document.querySelectorAll('.schedule__block-h3')
openTrailer = document.getElementById('openTrailer')
closeTrailer = document.getElementById('closeTrailer')


btnScroll.addEventListener('click', function(event) {
    event.preventDefault()
    const target = document.getElementById('sec1')
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    })
})

h3.forEach(function (h3) {
    h3.addEventListener('click', function() {
        text = h3.textContent
        window.open(`https://yandex.ru/maps/193/voronezh/search/${text}%20/`, '_blank')
    })
});

openTrailer.addEventListener('click', function() {
    document.getElementById('trailer-modal').classList.add('open')
})

closeTrailer.addEventListener('click', function() {
    document.getElementById('trailer-modal').classList.remove('open')
    const video = document.getElementById('video')
    video.pause();
    video.currentTime = 0;
})

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('trailer-modal').classList.remove('open')
    }
  });



