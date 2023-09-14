import { mainRegister } from "../../scripts/request.js"
const formRegister = async () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const element = [...e.target]
        const user = {}
        element.forEach(({name, value}) => {         
            if (name && name !== "") {
                user[name] = value
            }
        })
        await mainRegister(user)
    })
}

formRegister()

const openMenu = () => {
    const buttonMenu = document.querySelector(".button-menu")
    const buttonNav = document.querySelector(".buttons-nav")
    buttonMenu.addEventListener("click", () => {
        buttonNav.classList.toggle("show-menu")
        buttonMenu.classList.toggle("button-menu-change")
    })
}

openMenu()

const redirectPages = () => {
    const buttonNav = document.querySelector(".button-secondary")
    buttonNav.addEventListener("click", () => {
        window.location.replace("../../../index.html")
    })
}
redirectPages()

