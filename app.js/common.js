const viewPortIntersector = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        console.log(element)
        if (element.isIntersecting) {
            element.target.classList.add('show')
        }else {
            element.target.classList.remove('show')
        }
    })
})

const animatedEl = document.querySelectorAll('.animatedEl')
animatedEl.forEach((el) => viewPortIntersector.observe(el))