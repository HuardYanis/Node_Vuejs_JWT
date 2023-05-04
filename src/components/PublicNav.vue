<template>
 
     <img alt="Vue logo" src="../assets/logo.png">
     <nav>
            <router-link to="/">Accueil</router-link>|
           <router-link to="/cocktail">Cocktail</router-link>|
           <router-link to="/contact">Contact</router-link>|
           <RouterLink to="/admin/dashboard">Admin</RouterLink>|
           <router-link to="/login">Login</router-link>|
           <router-link to="/register">Inscription</router-link>
     </nav>
</template>

<script>
    export default {
        name: 'PublicNav'
    }
</script>
<style>
    img {
        position: absolute;
        right: 30px;
        height: 90px;
    }

</style>