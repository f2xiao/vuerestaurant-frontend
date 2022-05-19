<template>
  <v-app-bar app flat color="primary" hide-on-scroll>
      <v-app-bar-title>
        <v-img src="@/assets/logo.png" contain max-height="48" max-width="64"></v-img>
      </v-app-bar-title>
     <v-btn to="home" elevation="0" plain depressed class="pa-0" :ripple="ripple">
      home
     </v-btn>
     <v-btn to="menu" elevation="0" plain depressed class="pa-0" :ripple="ripple">
      menu
     </v-btn>
     <v-spacer></v-spacer>
      <v-btn icon to="/search" :ripple="ripple">
        <v-icon>mdi-magnify</v-icon>
     </v-btn>
     <v-btn icon to="/account" :ripple="ripple">
         <v-icon>mdi-account</v-icon>
     </v-btn>
     <v-btn icon to="/cart" :ripple="ripple">
        <v-icon>mdi-cart</v-icon>
        <span>{{cartTotalQuantity}}</span>
     </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'header-bar',
    data(){
      return {
        ripple: false
      }
    },
    computed: {
    ...mapGetters({
      cartTotalQuantity:'cart/cartTotalQuantity'
    })
  }
}
</script>
<style>
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1;
}
</style>