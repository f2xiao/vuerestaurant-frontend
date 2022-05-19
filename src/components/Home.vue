<template>
  <v-container class='home' style="height:85vh">
    <v-row  align="center" class="fill-height">
      <v-col align-self="end" cols="sm-6">
        <v-row style="height:15vh">
          <v-col offset-md="6">
            <v-btn color=" primary" to="/menu">
              Order Now
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <transition name="moveinleft" appear>
            <h2 class="text-md-h4 font-italic">the most authenticated Southern Chinese Food</h2>
          </transition>
          </v-col>
        </v-row>
      </v-col>
       <v-col align-self="start" cols="sm-6" order-sm='2'>
        <transition name="moveinright" appear>
          <h1  class="text-md-h1">Oriental Pearl</h1>
        </transition>
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
  @keyframes moveinLeft {
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
  @keyframes moveinRight {
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
  .moveinright-enter-active{
    animation: moveinRight 1.5s ease-in-out
  }
  .moveinleft-enter-active{
    animation: moveinLeft 1.5s ease-in-out
  }
}
</style>