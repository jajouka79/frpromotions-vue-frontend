<template>
    <!-- <img :src="`${globals.s3Bucket}/${props.path}`" /> -->

    <picture>
        <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        :srcset="
            `${globals.s3Bucket}/dist/200/${props.path} 200w,
            ${globals.s3Bucket}/dist/556/${props.path} 556w,
            ${globals.s3Bucket}/dist/819/${props.path} 819w,
            ${globals.s3Bucket}/dist/1019/${props.path} 1019w,
            ${globals.s3Bucket}/dist/1227/${props.path} 1227w,
            ${globals.s3Bucket}/dist/1336/${props.path} 1336w,
            ${globals.s3Bucket}/dist/1400/${props.path} 1400w`"
            :src="`${globals.s3Bucket}/dist/1400/${props.path}`"
        alt="">
    </picture>

</template>

<script setup>

import { defineProps } from 'vue'
import { defineOptions } from 'vue'
import { inject } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  path: String
})

// const getSrcSet = (size, path) => {


//     return '';
// }

const globals = inject('globals')


</script>