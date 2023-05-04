<template>
    <div>
        <h1>Connexion</h1>

        <form @submit.prevent="editer">
            <div class="formGroup">
                <input type="text" id="id_user" v-model="user._id" hidden>
            </div>
            <div class="formGroup">
                <label for="email">email</label>
                <input type="email" id="email" v-model="user.email">
            </div>
            <div class="formGroup">
                <label for="firstname">Prenom</label>
                <input type="text" id="firstname" v-model="user.firstname">
            </div>
            <div class="formGroup">
                <label for="lastname">Nom</label>
                <input type="text" id="lastname" v-model="user.lastname">
            </div>
            <div class="formGroup">
                <button type="submit" class="button">modifier</button>
            </div>

        </form>


    </div>
</template>
<script>
import { userService } from '@/_services';

export default {
   name: 'UserEdit',
   props: ['id'],
   data(){
        return {
            user:{}
        }
   },
   method: {
        editer(){
            userService.updateUser(this.user)
                        .then(res => console.log(res))
                        .catch(err => console.log(err))
        }
   },
   mounted(){
        userService.getUser(this.id)
            .then(res => {
                console.log(res.data)
                this.user = res.data
                
            })
            .catch(err => console.log(err))
   }



}

</script>
<style>

</style>