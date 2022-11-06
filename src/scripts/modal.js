const openModal = async (children) => {
    const body = document.querySelector("body")

    const modalWrapper = document.createElement("div")
    const modalContainer = document.createElement("div")
    const closeModalButton = document.createElement("button")

    modalWrapper.classList.add("modal-wrapper")
    modalContainer.classList.add("modal-container")
    closeModalButton.classList.add("close-modal")
    closeModalButton.innerText = "X"

    modalWrapper.addEventListener("click", (e) => {
        const {className} = e.target

        if (className === "modal-wrapper" || className === "modal-container" || className === "close-modal") {
            modalWrapper.remove()
        }
    })

    modalContainer.append(closeModalButton, children)
    modalWrapper.appendChild(modalContainer)
    body.appendChild(modalWrapper)

}
export default openModal