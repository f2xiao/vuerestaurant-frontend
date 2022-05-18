<template>
  <v-app>
    <header-bar></header-bar>
    <v-main>
      <router-view/>
    </v-main>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
import HeaderBar from './components/layout/HeaderBar.vue'
import FooterBar from './components/layout/FooterBar.vue'
export default {
  components: { HeaderBar, FooterBar },
  name: 'App',
  data: () => ({
    //
  }),
}
</script>