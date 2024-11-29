const previousBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const sliderList = document.querySelector('.slider-list')
const slide = document.querySelectorAll('.slide')
const sliderHeading = document.querySelector('.slider-heading')

let currentSlidePosition = 0

function nextSlide() {
    if (currentSlidePosition < slide.length - 1) {
        currentSlidePosition++
        sliderChanger()
    }
}
function prevSlide() {
    if (currentSlidePosition > 0) {
        currentSlidePosition--
        sliderChanger()
    }
}

function sliderChanger() {
    sliderList.style.transform = `translateX(-${currentSlidePosition * 100}%)`
    if (currentSlidePosition === 0) {
        previousBtn.style.display = 'none'
        sliderHeading.classList.remove('transparent')    }
    else {
        sliderHeading.classList.add('transparent')
        previousBtn.style.display = 'block'
    }
    if (currentSlidePosition === slide.length - 1) {
        nextBtn.style.display = 'none'
    }
    else {
        nextBtn.style.display = 'block'
    }
}
sliderChanger()

previousBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)
