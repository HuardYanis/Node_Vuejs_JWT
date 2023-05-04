<template>
    <div>
        <ul>
            <li><router-link to="/">Accueil</router-link>|</li>
            <li><router-link to="/admin/dashboard">Dashboard</router-link>|</li>
            <li><router-link to="/admin/users/index">User index</router-link>|</li>
            <li><router-link to="/admin/users/edit/2">Edit user 2</router-link>|</li>
         
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'AdminNav'
    }

</script>