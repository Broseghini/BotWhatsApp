import { userData } from "../../scripts/request.js";
import { getLocalStorage } from "../../scripts/localStorage.js"
import openModal from "../../scripts/modal.js";
import { editUser } from "../../scripts/forms.js"

const verifyPermission = () => {
    const user = getLocalStorage();
    if (user == "") {
        window.location.replace("../../../index.html");
    }
};

verifyPermission();

export const profileUser = async () => {
    const sectionProfile = document.querySelector(".section-profile")
    sectionProfile.innerHTML = ""

    const token = getLocalStorage()
    const data = await userData(token.token)

    sectionProfile.insertAdjacentHTML("beforeend", `
    <div class="flex flex-col gap-1">
    <h2 class="title-profile">${data.username}</h2>
    <div class="flex items-center">
        <p class="text-3">${data.email}</p>
        <p class="text-3 margin-left-1">${data.professional_level}</p>
        <p class="text-3 margin-left-2">${data.kind_of_work}</p>
    </div>
    </div>
    <button class="edit-button"></button>
    `)

    return sectionProfile
}

profileUser()

const departmentUserProfile = async () => {

}

departmentUserProfile()

const editUserProfile = async () => {
    const sectionProfile = document.querySelector(".section-profile")
    sectionProfile.addEventListener("click", async (e) => {
        const element = e.target
        if (element.tagName === "BUTTON") {
            const formUser = editUser()
            openModal(formUser)
        }
    })
    return sectionProfile
}

editUserProfile()

const logout = () => {
    const logoff = document.getElementById("logout")

    logoff.addEventListener("click", (e) => {
        localStorage.clear()
        window.location.reload()
    })
}

logout()