function randomBackground() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const middleNames = document.querySelectorAll('.member__middleName')

document.addEventListener('DOMContentLoaded', ()=> {
    middleNames.forEach((middleName) => {
        middleName.style.backgroundColor = randomBackground()
    })
})