<template>
    <div class="ad_head">
        Header Admin
        <button @click="logout()" id="button_logout">logout</button>
    </div>
</template>
<script>
import { accountService } from '@/_services';

    export default {
        name: 'AdminHeader',
        methods: {
            logout(){
                accountService.logout()
                this.$router.push('/')
            }
        }
    }

</script>

<style>
.ad_head {
    border-bottom: 1px solid black;
}
#button_logout {
    float: right;
}

</style>