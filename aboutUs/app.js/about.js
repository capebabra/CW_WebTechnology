const unseenElements = document.querySelectorAll('.aboutUnseen')
const elementsActivator = document.querySelector('.main-infoActiv')
const aboutContent = document.getElementById('aboutContent')

elementsActivator.addEventListener('click', ()=> {
    unseenElements.forEach((el) => {
        el.style.display = 'block'
        elementsActivator.style.display = 'none' //disables the button for further activations, making it one time event
        if (el.style.display = 'block') {
            setTimeout(() => {
                aboutContent.scrollIntoView({ behaviour: 'smooth'}) //sets timer for smooth scroll to unseen content
            }, 300)
        }
    })
})


// function that allows to make other about content part visible after clicking the ⌵
/* the ⌵ will disapear after activation of other content parts. 
There is also automatic scroll behaviour, which will activate almost simulatinously after the content apperance */