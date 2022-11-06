import { companyList } from "../../scripts/request.js";

const selectCompany = async () => {
    const select = document.querySelector("select")
    select.innerHTML = ""
    const responseRequest = await companyList()
    const selected = {name: "Selecionar empresa"}
    const selectFull = [selected, ...responseRequest]
    selectFull.forEach(element => {
        console.log(element)
        const option = document.createElement("option")
        option.innerText = `${element.name}`
        option.value = `${element.uuid}`
        if(element.name === "Selecionar empresa"){
            option.selected = true
        }
        select.appendChild(option)
    });

}

selectCompany()

const selectValue = () => {
    const select = document.getElementById("select")

    select.addEventListener("change", () => {
        const value = select.value
        
    })
}

selectValue()