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
import FooterBar from './components/layout/FooterBar.vue'
import HeaderBar from './components/layout/HeaderBar.vue'


export default {
  components: { HeaderBar, FooterBar },
  name: 'App',
  data: () => ({
    //
  }),
}
</script>