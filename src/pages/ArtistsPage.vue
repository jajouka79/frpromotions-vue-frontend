<template>
    <div class="page freedom-fest-page w-full m-auto h-screen flex justify-center">
      
      <!-- props.msg:{{ props.msg }} -->
      <div class="w-full m-3 lg:w-2/3">

        <div class="lg:w-96 m-auto">
            <RouterLink :to="{ name: 'Home' }">
                <ButtonCnt :text="gotoFrText.toUpperCase()" />
            </RouterLink>
        </div>

        <div class="lg:w-96 m-auto py-3">

            <RouterLink :to="{ name: 'Home' }">
                <ButtonCnt :text="gotoFrText.toUpperCase()" />
            </RouterLink>


          

        </div>
            
      </div>

    </div>

</template>
  
<script setup>
 
import ButtonCnt from '../components/ButtonCnt.vue' ;
import Image from '../components/ImageCnt.vue' ;
import { inject } from 'vue'

import {scrollToTop} from "../../data/helpers/scroll"

scrollToTop();

const globals = inject('globals')

const buyText = "Buy Freedom Fest Tickets";
 const gotoFrText = "Go To FR Promotions";
  const posterUrl = "https://activism2.s3.eu-west-2.amazonaws.com/Freedom+Fest+Poster+24-dev1.png"

  const buyTicketsUrl = "https://app.workshop-angel.com/form.php?h=1&t=0&e=0e59fb1a199e76cc";
  
  const gallery = [
  'DSC_0092.jpg',
  'DSC_0063.jpg',
  'DSC_0004.jpeg',
  'DSC_0009.jpg',
  'DSC_0199.jpg',
  'gate8.jpeg',
  'DSC_0549.jpg',
  'DSC_0543.jpg',
  'DSC_0543b.jpg',
  'DSC_0522.jpg',
  'DSC_0491.jpg',
  'DSC_0389.jpg',
  'DSC_0388.jpg',
  'DSC_0385.jpg',
  'DSC_0483.jpg',
  'DSC_0320.jpg',
  'DSC_0320b.jpg',
  'DSC_0358.jpg',
  'DSC_0321.jpg',
  'DSC_0322.jpg',
  
  ]
</script>
  