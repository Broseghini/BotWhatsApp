import { userEdit } from "./request.js"
import { getLocalStorage } from "./localStorage.js"
import { profileUser } from "../pages/userDashboard/index.js"

export const editUser = () => {
    const token = getLocalStorage()
    const formulario = document.createElement("form")
    formulario.classList = "flex flex-col margin-top-3 form-content"

    formulario.insertAdjacentHTML("beforeend", `
    <input type="text" name="username" id="username" placeholder="Seu nome" class="inputs-form-default">
    <input type="email" name="email" id="email" placeholder="Seu e-mail" class="inputs-form-default">
    <input type="password" name="password" id="password" placeholder="Sua senha" class="inputs-form-default">
    <button type="submit" class="button-secondary margin-top-4 w-full">Editar perfil</button>
    `)
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault()
        const inputs = [...formulario.elements]
        const user = {}
        const modal = document.querySelector(".modal-wrapper")
        inputs.forEach(({ name, value }) => {
            if (name) {
                user[name] = value
                modal.remove()
            }
        })
        await userEdit(token.token, user)
        await profileUser()
  

    })

    return formulario
}
