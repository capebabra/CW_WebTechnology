const details = document.querySelectorAll('.services__details')
const modalHeading = document.querySelector('.modalPage-heading')
const modalText = document.querySelector('.modalPage-text')
const modalPage = document.querySelector('.modalPage')
const modalExit = document.querySelector('.modalExit')
const modalSub = document.querySelector('.modalPage-subheading')
const servicesDesc = document.querySelector('.services__description')

const modalContent = {
    content1: {
        heading: "Basic",
        text: "Design of a private house, preparation of the construction site to start work, assembly of the wooden frame of the house, insulation of the walls and roof with environmentally friendly materials, installation of a reliable roof to protect against precipitation.                "
    },
    content2: {
        heading: "Standard",
        subheading: "Includes standard tariff services, as well as additional ones:",
        text: "Includes the basic tariff services, as well as: installation of internal partitions and insulation for zoning the space, installation of energy-saving windows and reliable doors, installation of electricity taking into account safety, plumbing work for water supply and sewerage, finishing of the facade for an aesthetic appearance, installation of heating for a comfortable climate in the house, installation of floors using high-quality materials.                     "
    },
    content3: {
        heading: "Premium",
        subheading: "Includes standard tariff services, as well as additional ones:",
        text: "Includes standard tariff services, as well as: development of a unique interior design, creation of a harmonious landscape design of the site, installation of a smart home system to automate processes, installation of a fireplace to create coziness, arrangement of a terrace or veranda for relaxation, installation of solar panels for energy saving, custom-made home furnishings, warranty service and repair, installation of ventilation and air conditioning for fresh air, landscaping of the territory with planting of trees and shrubs."
    }
}

details.forEach((detail) => {
    detail.addEventListener('click', () => {
        modalPage.style.display = 'flex'
        const modalKey = detail.getAttribute('data-modal')
        const contentType = modalContent[modalKey]
        servicesDesc.classList.toggle('modal__blur')
        document.body.classList.add('modal__overflow')
        if (contentType) { 
            modalHeading.textContent = contentType.heading || ''
            modalSub.textContent = contentType.subheading || ''
            modalText.textContent = contentType.text || ''  // provides with necessary content in the modalPage
        }
        setTimeout(() => {
            modalPage.scrollIntoView({behaviour: 'smooth'}) //provides automatic smooth scroll to modalPage
        }, 300)
    })
})

modalExit.addEventListener('click', () => {
    modalPage.style.display = 'none'
    servicesDesc.classList.toggle('modal__blur') // add or remove modal__blur
    document.body.classList.remove('modal__overflow') //removes overflow after closing modalPage
})


/* Function for Modal Page activation. After clicking on the details button, the modal page will appear. 
Depends on the which content button has been clicked the necessary info will be shown there respectively */