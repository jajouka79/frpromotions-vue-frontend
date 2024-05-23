<template>
  <div class="event">

    <div v-if="props.event.tickets_link">
      <!-- <button @click="pushTo('/ff')">Redirect to "ff"</button> -->
      <div>
        <a class="cursor-pointer text-xl uppercase font-bold text-black" @click="pushTo('/ff')" target="_blank">
          {{ props.event.buy_tickets_text }}
        </a>
      </div>

      <a class="cursor-pointer" @click="pushTo('/ff')" target="_blank">
        <img :src="props.event.image.path" />
      </a>
    </div>

    <div v-else>
      <img :src="props.event.image.path" />
    </div>

  </div>
</template>

<script setup>

import { defineProps } from 'vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// const pushTo = (route) => { router.push(route).catch(err => {})}
const pushTo = (route) => { router.push(route).catch(err => {})}


router.push({ name: 'UserDetails', params: { id: nextId } })

const message = inject('message')

console.log('message', message);
const props = defineProps({
  event: Object
})



</script>

