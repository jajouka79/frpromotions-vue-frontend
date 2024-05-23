<template>
  <div class="flex justify-center m-2">
    <div class="mt-6 max-w-xl">
      
      <p>
        <strong>Current route path:</strong> {{ $route.fullPath }}
      </p>
      <nav>
        <RouterLink :to="{ name: 'Home' }">Go to Home</RouterLink>
        <!-- <RouterLink :to="{ name: 'FreedomFest' }">Go to FF</RouterLink>
        <button @click="pushTo('/ff')">Redirect to "ff"</button> -->

      </nav>
      <main>
        <HeaderCnt v-if="$route.fullPath !== '/ff'" />
        <RouterView />
        <FooterCnt />
      </main>

    </div>
  </div>
</template>


<script setup>
// import { useRouter } from 'vue-router'
import HeaderCnt from './components/HeaderCnt.vue'
import FooterCnt from './components/FooterCnt.vue'
// const router = useRouter()

// const pushTo = (route) => { router.push(route)}
</script>

<!-- <script>
import { useRouter } from 'vue-router'
import HeaderCnt from './components/HeaderCnt.vue'
import FooterCnt from './components/FooterCnt.vue'

export default {
  // setup() {
  //   const router = useRouter()


  //   function pushTo(route) { router.push(route)}

  //   return {
  //     pushTo,
  //     HeaderCnt,
  //     FooterCnt
  //   }
  }
}
</script> -->
