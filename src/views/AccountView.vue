<template>
<div>
  <h1>My Account</h1>
  <login v-if="!isLoggedIn" />
  <account v-else />
 
</div>
  
</template>

<script>
import Account from '../components/Account.vue'
import Login from '../components/Login.vue'

export default {
  name:'AccountView',
  components:{
    Login,
    Account
  },
  data() {
    return {
      isLoggedIn:true,
    }
  },

}
</script>

<style>
h1{
  text-align: center;
}
</style>