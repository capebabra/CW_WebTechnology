const inputs = document.querySelectorAll('.values-input');
const contact = document.querySelector('.blank__contact');

contact.addEventListener('click', (e) => {
    let hasEmptyFields = false

    document.querySelectorAll('.value-error').forEach((error) => error.remove())

    inputs.forEach((input) => {
        if (input.value === '') {
            hasEmptyFields = true

            if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')){ //checks if the error paragraph already contains
                input.insertAdjacentHTML('afterend', '<p class="value-error">Sorry, you didn\'t fill this field</p>')
            }
        }
    }) // If there are no any input values, the function will create a paragraph with message that person haven't input any val.

    if (hasEmptyFields) {
        e.preventDefault() 
    } // Checks whether the input has values or not. If there are missing values, then function prevents the setting for (href) value

    inputs.forEach((input) => {
        input.value = ''
    }) // resets the input values

    contact.setAttribute('href', 'tel:+23213231238988807550') // setting phone number to contact (this number unexisting)
})


/* Quite simple, but very effective function that allows clear and check whether the info in inputs are filled or not.
 After clicking the button the function will reset the input space */
