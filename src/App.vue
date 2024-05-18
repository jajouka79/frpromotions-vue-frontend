<template>
  <div class="flex justify-center m-2">
    <div class="mt-6 max-w-xl">
      <HeaderCnt />
      <Home /> 
      <FooterCnt />
    </div>
  </div>
</template>

<script setup>
import Home from './pages/HomePage.vue'
import HeaderCnt from './components/HeaderCnt.vue'
import FooterCnt from './components/FooterCnt.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
