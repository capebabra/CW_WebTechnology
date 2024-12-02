const viewPortIntersector = new IntersectionObserver((elements) => { // observes the element intersection. So if the element is on the veiwPort than it provides with the following effect
    elements.forEach((element) => {
        console.log(element)
        if (element.isIntersecting) { // if the element is on the viewPort
            element.target.classList.add('show') // add class show
        }else { // if not on viewPort
            element.target.classList.remove('show') // removes class show
        }
    })
})

const animatedEl = document.querySelectorAll('.animatedEl')
animatedEl.forEach((el) => viewPortIntersector.observe(el)) // it tells the IntersectionObserver to observe the following variables (in this case html elements with class animatedEl

// creates a smooth animation of the words apperance