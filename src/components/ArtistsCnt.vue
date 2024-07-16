<template>
  <div class="artists mb-12" v-for="(artist, index) in artists" :key="index">
    <!-- <button @click="goToFreedomFest">Go to Freedom Fest!!!!</button>
     -->
    
    <ArtistCnt class="artist" :artist=artist />
  </div>
</template>

<script setup>
//import { defineProps, defineEmits } from 'vue'
import ArtistCnt from "./ArtistCnt.vue";

import { inject } from 'vue'

const artists = inject('artists')

</script>

