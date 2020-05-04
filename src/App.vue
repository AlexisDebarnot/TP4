<template>
  <div id="app" class="container">
    <div class="jumbotron mt-3">
      <Navbar />
      <router-view></router-view>


    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
    }
  }
};
</script>

<style>
  #app {
  }

  h1 {
    color: blue;    
  }

</style>
