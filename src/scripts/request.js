import { getLocalStorage } from "./localStorage.js"
const baseUrl = "http://localhost:6278/"
const myHeader = {
    "Content-Type": "application/json"
}

export const companyList = async () => {
    try {
        const request = await fetch(baseUrl + "companies", {
            method: "GET",
            headers: myHeader
        })
        if (request.ok) {
            const response = request.json()
            return response
        }
    } catch (error) {
        return error
    }
}

export const sectorList = async (value) => {
    try {
        const request = await fetch(baseUrl + "companies/" + `${value}`, {
            method: "GET",
            headers: myHeader
        })
        if (request.ok) {
            const response = request.json()
            return response
        }

    } catch (error) {
        return error
    }
}

export const mainLogin = async (body) => {
    try {
        const request = await fetch(baseUrl + "auth/login", {
            method: "POST",
            headers: myHeader,
            body: JSON.stringify(body)
        })
        if (request.ok) {
            const response = await request.json()
            localStorage.setItem("user", JSON.stringify(response))
            await authVerify(response.token)
        }
    } catch (error) {
        return error
    }
}

export const authVerify = async (token) => {
    try {
        const request = await fetch(baseUrl + "auth/validate_user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        if (request.ok) {
            const response = await request.json()
            if (response.is_admin) {
                setTimeout(() => {
                    window.location.replace("../admDashboard/index.html")
                }, 2000);
            } else {
                setTimeout(() => {
                    window.location.replace("../userDashboard/index.html")
                }, 2000);
            }
        }
    } catch (error) {
        return error
    }
}

export const mainRegister = async (body) => {
    try {
        const request = await fetch(baseUrl + "auth/register", {
            method: "POST",
            headers: myHeader,
            body: JSON.stringify(body)
        })
        if (request.ok) {
            const response = await request.json()
            setTimeout(() => {
                window.location.replace("../userLogin/index.html")
            }, 2000);
            return response
        }

    } catch (error) {
        return error
    }
}

export const userData = async (token) => {
    try {
        const request = await fetch(baseUrl + "users/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        if (request.ok) {
            const response = request.json()
            return response
        }
    } catch (error) {
        return error
    }

}

export const userEdit = async (token, body) => {
    try {
        console.log(token, body)
        const request = await fetch(baseUrl + "users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        if (request.ok) {
            const response = request.json()
            return response
        }
    } catch (error) {
        return error
    }
}