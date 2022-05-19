<template>
  <div class="menu-view">
    <v-container>
      <v-row>
        <v-col cols="lg-4 md-6 sm-12" v-for="product in productItems" :key="product.id">
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
    ...mapGetters(['productItems'])
  },
  created() {
    this.$store.dispatch('getProductItems');
  },
  beforemounted() {
    if(isLoggedIn){
      this.$store.dispatch("getSavedCartItems");
    }
  }
}
</script>