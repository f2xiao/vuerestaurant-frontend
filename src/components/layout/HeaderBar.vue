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
      temporary
      app
    >
    <v-container style="height: 100%">
      <v-row style="height: 100%; margin: 0" align-content="space-between">
        <v-col  v-if="!items.length" class="mt-16">
          <p class="text-center">Add some items to the cart!</p>
          <p class="text-center">
            <v-btn @click="group=!group" to="/menu" color=" primary">
              Order Now
            </v-btn>
          </p>
          <v-divider></v-divider>
        </v-col>
        <v-col v-if="items.length">
          <v-list
            nav
            dense
          >
          <v-list-item>
            <v-list-item-title>Total items: {{cartTotalQuantity}}</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.title">
              <template>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" class="text-uppercase"></v-list-item-title>
                  <v-list-item-subtitle v-text="`quantity: ${item.quantity}`"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="incrementItemQuantity(item)">+</v-btn>
                  <v-btn icon @click="decrementItemQuantity(item)">-</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list>

        </v-col>
        <v-col class="d-flex justify-center" style="border-top: 1px solid rgba(0, 0, 0, 0.12)">
          <v-btn :disabled="!items.length">Checkout  (<span>${{ total }}</span>) </v-btn></v-col>
      </v-row>
    </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';
export default {
  name: 'header-bar',
  data(){
    return {
      ripple: false,
      drawer: false,
      group: null,
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  computed: {
    ...mapGetters({
      cartTotalQuantity:'cart/cartTotalQuantity',
      items:'cart/cartProducts',
      total:'cart/cartTotalPrice'
    }),
  },
  methods: {
    ...mapMutations({
      incrementItemQuantity: 'cart/incrementItemQuantity',
      decrementItemQuantity: 'cart/decrementItemQuantity'
    })
  },
}
</script>
<style>
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1;
}
.cart .v-list{
  display :flex;
  flex-direction: column;
  justify-content: space-between;
  height:100%;
}
</style>