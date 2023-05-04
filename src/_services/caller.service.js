/**import des modules neccessaire */
import axios from 'axios'
import { accountService } from './account.service'
import router from '@/router'

const Axios = axios.create({
    baseURL: 'http://localhost:8000'
})
/*injection token dans la requete */
Axios.interceptors.request.use(request => {
    
    
    if(accountService.isLogged()){
        
        request.headers.authorization = 'Bearer '  + accountService.getToken()
    }
    return request
})

/** intercepte la reponse de l api comme ca je peux gerer les token expirer et eviter les erreurs dans la console */

Axios.interceptors.response.use(response => {
    return response
}, error => {
    if(error.response.status == 401) {
        accountService.logout()
        router.push('/login')
    }
})
export default Axios
