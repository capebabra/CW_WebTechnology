function randomBackground() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}` // function that rands the calc for the color
}

const middleNames = document.querySelectorAll('.member__middleName')

document.addEventListener('DOMContentLoaded', ()=> {
    middleNames.forEach((middleName) => {
        middleName.style.backgroundColor = randomBackground() // inputs the calculated backGround color
    })
})

// Function which changes every page updates the middleName of staff member