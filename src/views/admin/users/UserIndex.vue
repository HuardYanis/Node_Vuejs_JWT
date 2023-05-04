<template>
    <div>
        liste des utilisateurs ( il y a {{ comptage }} utilisateurs)
        <table>
            <thead>
                <tr>
                    <th>email</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>createdAt</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user._id">
                    <td class="edit" @click="goEdit(user._id)">{{ user.email }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ dateFormat[index]}}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>
<script>
import { userService } from '@/_services';

export default {
   name: 'UserIndex',
   data() {
        return {
            users: []
        }
   },
   methods: {
        goEdit(uid){
            this.$router.push({name :'uEdit', params:{id:uid}})
        }

   },       
   mounted(){
        userService.getAllUsers()
            .then(res => {
             
                this.users = res.data
            })
            .catch(err => console.log(err))
   }
   ,
   computed: {
    comptage(){
        return (this.users.length == 0)? 'aucun utilisateur' : ` ${this.users.length}`
    },
    dateFormat(){
        return this.users.map(u =>u.createdAt.split('T')[0].split('-').reverse().join('/'))
    }
   }


}

</script>
<style>
    table {
        width: 100%;
    }
    .edit{
        cursor: pointer;
    }
    .edit:hover{
        font-weight: bold;
    }
</style>