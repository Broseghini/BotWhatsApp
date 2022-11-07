import { companyList, sectorList } from "./request.js"

const renderCompany = async (array) => {
    const ulCompany = document.querySelector("#ulCompany")
    const responseRequest = await array
    ulCompany.innerHTML = ""
    responseRequest.forEach(element => {
        createCardHome(element)
    });
}

renderCompany(companyList())

const createCardHome = (company) => {
    const ulCompany = document.querySelector("#ulCompany")

    const li = document.createElement("li")
    const titleCompany = document.createElement("h2")
    const divDescription = document.createElement("div")
    const hours = document.createElement("p")
    const sector = document.createElement("p")

    li.id = company.uuid
    li.classList = "card"
    titleCompany.innerText = company.name
    titleCompany.classList = "title-card"
    divDescription.classList = "card-description flex flex-col gap-2"
    hours.innerText = `${company.opening_hours}`
    hours.classList = "text-1"
    sector.id = company.sectors.uuid
    sector.innerText = company.sectors.description
    sector.classList = "sector-company"

    divDescription.append(hours, sector)
    li.append(titleCompany, divDescription)
    ulCompany.appendChild(li)
}

const selectValue = () => {
    const select = document.getElementById("select")

    select.addEventListener("change", () => {
        const value = select.value
        const valueFinal = value[0].toUpperCase() + value.substring(1)
   
        if (valueFinal === "Todos") {
            
            const companies = companyList()
            renderCompany(companies)

        } else if (valueFinal === "Ti") {

            const sector = sectorList(valueFinal.toUpperCase())
            renderCompany(sector)

        } else {
            const sector = sectorList(valueFinal)
            renderCompany(sector)
        }
    })
}

selectValue()

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
    const buttonNav = document.querySelector(".buttons-nav")
    const element = [...buttonNav.children]
    element.forEach(element => {
        element.addEventListener("click", (e) => {
            if(element.innerText === "Login"){
                setTimeout(() => {
                    window.location.replace("../../index.html")
                }, 2000);
            }else{
                setTimeout(() => {
                    window.location.replace("./src/pages/register/index.html")
                }, 2000);
            }
        })
    })
}

redirectPages()