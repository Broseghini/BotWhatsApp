export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("user")) || ""
}