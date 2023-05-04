<template>
    <div>
      <h1>Inscription</h1>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="user.email" required>
        </div>
        <div>
          <label for="firstname">Prénom</label>
          <input type="text" id="firstname" v-model="user.firstname" required>
        </div>
        <div>
          <label for="lastname">Nom</label>
          <input type="text" id="lastname" v-model="user.lastname" required>
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="user.password" required>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>
<script>
    import { accountService } from '@/_services'
    export default {
        name:'Register',
        data(){
            return {
                user: {

                    email: '',
                    firstname: '',
                    lastname: '',
                    password: ''

                }
            };
        },
        methods: {
            register(){
                accountService.register(this.user)
                    .then(res => {
                        this.$router.push('/login')
                    }).catch(err => {console.log(err)});
            }
        }
    }

</script>