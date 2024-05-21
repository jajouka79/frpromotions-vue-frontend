<template>
  <div class="event">

    <div v-if="props.event.tickets_link">
      <div>
        <a class="text-xl uppercase font-bold text-black" :href="props.event.tickets_link" target="_blank">
          {{ props.event.buy_tickets_text }}
        </a>
      </div>

      <a :href="props.event.tickets_link" target="_blank">
        <img :src="props.event.image.path" />
      </a>
    </div>

    <div v-else>
      <img :src="props.event.image.path" />
    </div>

  </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue'
import { inject } from 'vue'

const message = inject('message')

console.log('message', message);
const props = defineProps({
  event: Object
})

const emit = defineEmits(['change', 'delete'])
console.log(emit);


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
