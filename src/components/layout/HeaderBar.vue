<template>
  <div>
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
     <v-btn icon :ripple="ripple" @click.stop="drawer = !drawer">
        <v-icon>mdi-cart</v-icon>
        <span>{{cartTotalQuantity}}</span>
     </v-btn>
  </v-app-bar>
   <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  name: 'header-bar',
  data(){
    return {
      ripple: false,
      drawer: false,
      group: null,
    }
  },
  computed: {
    ...mapGetters({
      cartTotalQuantity:'cart/cartTotalQuantity',
    }),
  },
  watch: {
      group () {
        this.drawer = false
      },
    },
 
}
</script>
<style>
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1;
}
</style>