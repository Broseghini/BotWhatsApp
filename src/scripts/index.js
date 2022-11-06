import { mainLogin } from "./request.js"

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
            window.location.replace("./src/pages/register/index.html")
    })
}



redirectPages()

const formLogin = async () => {
    const form = document.querySelector("form")
    const element = [...form.elements]

    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const user = {}

        element.forEach(element => {
            if (element.tagName === "INPUT" && element.value.trim() !== "") {
                user[element.id] = element.value
            }
        })
        await mainLogin(user)
    })
}

formLogin()

