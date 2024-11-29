const inputs = document.querySelectorAll('.values-input')
const contact = document.querySelector('.blank__contact')

contact.addEventListener('click', ()=> [
    inputs.forEach((input) => {
        input.value = ''
    })
])
