

const filters = document.querySelectorAll(".main__chip")





function filterSelected (event) {
    filters.forEach(filter => {
        filter.setAttribute("aria-pressed", "false")
    })
    event.target.setAttribute("aria-pressed","true")
}
filters.forEach(filter => {
    filter.addEventListener("click", filterSelected)
})