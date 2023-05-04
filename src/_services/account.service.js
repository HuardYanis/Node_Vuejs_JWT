/**import des modules neccessaire */
import Axios from './caller.service'




let login = (credentials) => {

    return Axios.post('/login', credentials)

}

let register = (credentials) => {
    return Axios.post('/register', credentials)
}

let logout = ()=>{
    localStorage.removeItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let getToken = () => {
    return localStorage.getItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !! token /**tansform en boolean true /false */
}


export const accountService = {
    login,
    logout,
    saveToken,
    getToken,
    isLogged,
    register
}