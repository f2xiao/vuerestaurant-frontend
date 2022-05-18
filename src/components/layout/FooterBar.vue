<template>
  <v-footer class="d-flex flex-column" color="white">
    <div class="d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        icon
        variant="plain"
        size="small"
      >
      <v-icon>
        {{icon}}
      </v-icon>

      </v-btn>
    </div>

    <div class="px-4 py-2 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Oriental Pearl</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
    name: 'footer-bar',
     data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>
