<template>
  <div class="menu-view">
    <v-container class="py-8">
      <v-row>
        <v-col cols="lg-3" md="4" sm="6" v-for="product in productItems" :key="product.id">
          <menu-card :item="product"></menu-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuCard from '../components/MenuCard.vue';

export default {
  components: { MenuCard },
  data(){
    return{
      isLoggedIn: false,
      showCartPanel: false,
    }
  },
  computed: {
    ...mapGetters({
      productItems: 'products/productItems'
    })
  },
  created() {
    this.$store.dispatch('products/getProductItems');
  },
  beforemounted() {
    if(isLoggedIn){
      this.$store.dispatch("cart/getSavedCartItems");
    }
  }
}
</script>