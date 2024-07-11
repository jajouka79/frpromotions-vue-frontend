<template>
  <div class="events mb-12" v-for="(event, index) in events" :key="index">
    <!-- <button @click="goToFreedomFest">Go to Freedom Fest!!!!</button>
     -->
    
    <EventCnt class="event" :event=event />
  </div>
</template>

<script setup>
//import { defineProps, defineEmits } from 'vue'
import EventCnt from "./EventCnt.vue";

import { inject } from 'vue'

const events = inject('events')

</script>

