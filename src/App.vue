<template>
      <!-- <p>
        <strong>Current route path:</strong> {{ $route.fullPath }}
      </p> -->

      <main>
        
        <RouterView />
        <FooterCnt />
      </main>

</template>


<script setup>
// import { useRouter } from 'vue-router'
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
