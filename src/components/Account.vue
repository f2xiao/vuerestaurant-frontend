<template>
   <v-card>   
    <v-tabs
      v-model="tab"
      align-with-title
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
      <v-tab>
        <v-btn  elevation="0" plain depressed class="pa-0" :ripple="ripple">
      LOGOUT
     </v-btn>
      </v-tab>
    </v-tabs>
     
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {
      tab: null,
      items:["Orders", "Account Details"],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },

}
</script>

<style>

</style>