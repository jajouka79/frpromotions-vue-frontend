<template>
  <div class="events mb-12" v-for="event in events" :key="event.name">
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


const globals = inject('globals')


console.log("globals", globals)


// const goToFreedomFest = () => {
//   this.$router.push('/ff')
// }



//import { provide } from 'vue'

//provide(/* key */ 'message', /* value */ 'hello!')

// const events = [{
//       "name": "event 1",
//       "date": "march 2025"
//     },
//     {
//       "name": "event 2",
//       "date": "may 2025"
//     },
// ];

// const props = defineProps({
//   foo: String
// })

// const emit = defineEmits(['change', 'delete'])


// const isActive = ref(false)
// const user = reactive({ firstName: 'John', lastName: 'Doe', age: 25 })

// const fullName = computed(() => user.firstName + ' ' + user.lastName)

</script>

