const unseenElements = document.querySelectorAll('.aboutUnseen')
const elementsActivator = document.querySelector('.main-infoActiv')
const aboutContent = document.getElementById('aboutContent')

elementsActivator.addEventListener('click', ()=> {
    unseenElements.forEach((el) => {
        el.style.display = 'block'
        elementsActivator.style.display = 'none'
        if (el.style.display = 'block') {
            setTimeout(() => {
                aboutContent.scrollIntoView({ behaviour: 'smooth'})
            }, 300)
        }
    })
})
