const previousBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const sliderList = document.querySelector('.slider-list')
const slide = document.querySelectorAll('.slide')
const sliderHeading = document.querySelector('.slider-heading')

let currentSlidePosition = 0

function nextSlide() { //disables nextSlide button if the slide on last page
    if (currentSlidePosition < slide.length - 1) {
        currentSlidePosition++
        sliderChanger()
    }
}
function prevSlide() { // disables the  previousSLide button if the the slide on 1 page
    if (currentSlidePosition > 0) {
        currentSlidePosition--
        sliderChanger()
    }
}

function sliderChanger() {
    sliderList.style.transform = `translateX(-${currentSlidePosition * 100}%)` // provide smooth slide move animation 
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


/* The slider function will allows user to sldie the content and makes the website usability more interactive.
So in the content in both opposite content side are seen the < and > which allows user to slide through the images.
Based on the slide order the <, > will appear and disapear. So if user is on the slide 1, then the previous button (<), will be unable and unseen to be clicked.
Similarly to ones, the ,forward button will also be unable and unseen when the user is on the last slide */