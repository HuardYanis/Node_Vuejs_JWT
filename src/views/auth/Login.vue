<template>
    <div>
        <h1>Connexion</h1>

        <form @submit.prevent="login">

            <div class="formGroup">
                <label for="user_login">Userlogin</label>
                <input type="text" id="user_login" v-model="user.login">
            </div>
            <div class="formGroup">
                <label for="user_password">Password</label>
                <input type="text" id="user_password" v-model="user.password">
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Connection</button>
            </div>

        </form>


    </div>
</template>
<script>
    import { accountService } from '@/_services'
    export default {
        name:'Login',
        data(){
            return {
                user: {
                    login:'',
                    password:''
                }
            }
        },
        methods: {
            login(){
                accountService.login(this.user)
                    .then(res =>{
                        accountService.saveToken(res.data.token)
                        this.$router.push('/')
                    }).catch(err =>{console.log(err)})

            }
        }
    }

</script>