<template>
  <div class="event">

    <div v-if="props.event.tickets_link">
      <!-- <button @click="pushTo('/ff')">Redirect to "ff"</button> -->
      <div class="my-8">

        <div v-if="props.event.promote_buy">

          <div class="mr-2 w-full">
                <a target="_blank" @click="pushTo('/ff')">
                    <Button class="text-uppercase w-full text-3xl" :text="props.event.buy_tickets_text.toUpperCase()" />
                </a>
            </div>
        </div>
        
        <a v-else class="cursor-pointer text-xl uppercase font-bold text-black" @click="pushTo('/ff')" target="_blank">
          {{ props.event.buy_tickets_text }}
        </a>

      </div>

      <a class="cursor-pointer" @click="pushTo('/ff')" target="_blank">
        <Image :path="props.event.image.path" />
      </a>
    </div>

    <div v-else>
      <!-- <img :src="props.event.image.path" /> -->
       <Image :path="props.event.image.path" />
    </div>

    
    <div v-if="props.event.promote_buy">

      <div class="mr-2 my-10 w-full">
            <a target="_blank" @click="pushTo('/ff')">
                <Button class="text-uppercase w-full text-3xl" :text="props.event.buy_tickets_text.toUpperCase()" />
            </a>
        </div>
      </div>

  </div>
</template>

<script setup>

import { defineProps } from 'vue'
//import { inject } from 'vue'
import { useRouter } from 'vue-router'
import Image from './ImageCnt.vue'
import { defineOptions } from 'vue'
import Button from "./ButtonCnt.vue";

defineOptions({
  inheritAttrs: false
})

const router = useRouter()

const pushTo = (route) => { router.push(route).catch(err => {})}

//const message = inject('message')

//console.log('message', message);
const props = defineProps({
  event: Object
})

//console.log(props);

</script>