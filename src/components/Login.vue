<template>
<v-card class="d-flex justify-center">
  <v-card class="d-flex flex-column justify-center pa-5">
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="mdi-account-circle" label="username" />
        <v-text-field type="Password" label="password" prepend-icon="mdi-lock"  append-icon="mdi-eye-off" />
      </v-form>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn>Signin</v-btn>
      <v-spacer></v-spacer>
      <v-btn>Register</v-btn>
    </v-card-actions>
  </v-card>
</v-card>
</template>

<script>
export default {
  name:'Login'
}
</script>

<style>

</style>