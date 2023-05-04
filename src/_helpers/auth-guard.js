import router from '@/router'

export function authGuard(to){
    let token = localStorage.getItem('token')


    if(token){
            // Decode the JWT token to get the payload
        let payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))

        if(payload.role){
            return true
        }

    }
    router.push('/login')
}