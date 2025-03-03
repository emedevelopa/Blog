const hamburgerMenu = document.querySelector('.nav__hamburger')
const hamburgerBtn = document.querySelector(".nav__btn")
const hamburgerIcon = document.querySelector(".hamburgerIcon")
const closeIcon = document.querySelector(".closeIcon")

const filters = document.querySelectorAll(".main__chip")


function toggleMenu () {
    if(hamburgerMenu.classList.contains("showMenu")) {
        document.querySelector('.nav__links a').focus();//le da foco al primer link del menu
        hamburgerMenu.classList.remove("showMenu")
        hamburgerIcon.style.opacity = 1
        closeIcon.style.opacity = 0
        hamburgerBtn.setAttribute("aria-expanded", "false")
        hamburgerIcon.setAttribute("aria-hidden", "false"); // Icono hamburguesa es accesible
        closeIcon.setAttribute("aria-hidden", "true"); 

    } else {
        hamburgerMenu.classList.add("showMenu")
        hamburgerIcon.style.opacity = 0
        closeIcon.style.opacity = 1
        hamburgerBtn.setAttribute("aria-expanded", "true")
        hamburgerIcon.setAttribute("aria-hidden", "true"); // Icono hamburguesa es accesible
        closeIcon.setAttribute("aria-hidden", "false"); 

    }
}
hamburgerBtn.addEventListener("click", toggleMenu)


function filterSelected (event) {
    filters.forEach(filter => {
        filter.setAttribute("aria-pressed", "false")
    })
    event.target.setAttribute("aria-pressed","true")
}
filters.forEach(filter => {
    filter.addEventListener("click", filterSelected)
})