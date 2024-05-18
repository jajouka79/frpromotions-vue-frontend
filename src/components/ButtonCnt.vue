<template>
    <button class="w-full bg-black text-white font-bold p-2 hover:bg-white hover:text-black border border-black">{{ props.text }}</button>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: String
})

</script>