<template>
  <v-container class='home' style="height:85vh">
    <v-row  align="center" class="fill-height">
      <v-col align-self="end" cols="sm-6">
           <h2 class="text-md-h4 sh font-italic">the most authenticated Southern Chinese Food</h2>
      </v-col>
       <v-col align-self="start" cols="sm-6" order-sm='2'> 
          <h1  class="text-md-h1 ph">Oriental Pearl</h1>
      </v-col>
    </v-row>
        
  </v-container>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style lang="scss">
.home {
  height: 100%;
  background-image: url(@/assets/img/hero.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  @keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.ph{
  animation: moveInRight 1.5s ease-in-out
}
.sh{
  animation: moveInLeft 1.5s ease-in-out
}
}

</style>