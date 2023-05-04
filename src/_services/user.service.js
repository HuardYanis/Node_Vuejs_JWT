import Axios from './caller.service'

let getAllUsers = () => {
    return Axios.get('/userlist')
}

let getUser = (uid)=>{
    return Axios.get('/user/' + uid)
}

let updateUser = (user)=> {
    return Axios.patch('/user/edit/'+user._id , user)
}




export const userService = {
    getAllUsers, getUser, updateUser
}