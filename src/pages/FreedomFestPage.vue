<template>
    <div class="page freedom-fest-page w-full m-auto h-screen flex justify-center">
      
      <!-- props.msg:{{ props.msg }} -->
      <div class="w-full m-3 lg:w-2/3">

        <div class="lg:w-96 m-auto">
            <RouterLink :to="{ name: 'Home' }">
                <ButtonCnt text="Go To FR Promotions" />
            </RouterLink>
        </div>
            
        
  
  
        <div class="mt-3">

            <img :src="posterUrl" />

            <div class="lg:w-96 m-auto">
                <a :href="buyTicketsUrl" target="_blank">
                    <ButtonCnt text="Buy Tickets" class="my-3" />
                </a>
            </div>


            <div class="p-3">
                <p class="pb-3">We are pleased to announce that this is the 3rd annual Freedom Fest, 2023.</p>
                
                <p class="pb-3">Educational speakers and conscious music artists in a big Marquee in the beautiful grounds of the riverside Pub
                     The Gate Hangs Well in Syston, Leicestershire.</p>

                <p class="pb-3">People gather to seek information on the political, financial, health and social issues facing us in these tumultuous times,
                     discuss possible solutions and to celebrate the rich resistance culture that has developed over the past few years.</p>
                
                <p class="pb-3">We have a variety of engaging and informative speakers and an impressive line-up of conscious music artists & DJs.</p>

                <h2 class="font-bold">CAMPING</h2>
                <p class="pb-3">Campers can set up from 10am on Friday 2nd August.</p>
                <p class="pb-3">Outdoor toilets and water supply provided and the pub facilities will be available during opening hours.</p>


                <p class="pb-3"><i>Send an email at frpromotions@protonmail.com for alternative payment methods.</i></p>

            </div>

            <div class="lg:w-96 m-auto">
                <a :href="buyTicketsUrl" target="_blank">
                    <ButtonCnt text="Buy Tickets" class="my-3" />
                </a>
            </div>

            <div class="grid grid-cols-4 gap-4">
                <div :key="photo" v-for="photo in gallery">
                    <a :href="photo" target="_blank">
                        <img :src="photo" />
                    </a>
                </div>
            </div>
                
            <div class="lg:w-96 m-auto py-3">
                <RouterLink :to="{ name: 'Home' }">
                    <ButtonCnt text="Go To FR Promotions" />
                </RouterLink>
            </div>
                
        

      </div>


    </div>
</div>
  </template>
  
  <script setup>
 
import ButtonCnt from '../components/ButtonCnt.vue' ;

  const baseUrl = "https://activism2.s3.eu-west-2.amazonaws.com";

  const posterUrl = "https://activism2.s3.eu-west-2.amazonaws.com/Freedom+Fest+Poster+24-dev1.png"

  const buyTicketsUrl = "https://app.workshop-angel.com/form.php?h=1&t=0&e=0e59fb1a199e76cc";

  
  const gallery = [
  `${baseUrl}/DSC_0444.jpg`,
  `${baseUrl}/DSC_0092.jpg`,
  `${baseUrl}/DSC_0063.jpg`,
  `${baseUrl}/DSC_0004.jpeg`,
  `${baseUrl}/DSC_0009.jpg`,
  `${baseUrl}/DSC_0199.jpg`,
  `${baseUrl}/gate1.jpeg`,
  `${baseUrl}/gate2.jpeg`,
  `${baseUrl}/gate3.jpeg`,
  `${baseUrl}/gate4.jpeg`,
  `${baseUrl}/gate5.jpeg`,
  `${baseUrl}/gate6.jpeg`,
  `${baseUrl}/gate7.jpeg`,
  `${baseUrl}/gate8.jpeg`,
  `${baseUrl}/gate9.jpeg`,
  `${baseUrl}/gate10.jpeg`,
  `${baseUrl}/gate11.jpeg`,
  `${baseUrl}/gate12.jpeg`,
  `${baseUrl}/gate13.jpeg`,
  `${baseUrl}/gate14.jpeg`,


  `${baseUrl}/DSC_0560.jpg`,
  `${baseUrl}/DSC_0549.jpg`,
  `${baseUrl}/DSC_0543.jpg`,
  `${baseUrl}/DSC_0543b.jpg`,
  `${baseUrl}/DSC_0522.jpg`,
  `${baseUrl}/DSC_0491.jpg`,
  `${baseUrl}/DSC_0389.jpg`,
  `${baseUrl}/DSC_0388.jpg`,
  `${baseUrl}/DSC_0385.jpg`,
  `${baseUrl}/DSC_0483.jpg`,
  `${baseUrl}/DSC_0320.jpg`,
  `${baseUrl}/DSC_0320b.jpg`,
  `${baseUrl}/DSC_0358.jpg`,
  `${baseUrl}/DSC_0321.jpg`,
  `${baseUrl}/DSC_0322.jpg`,
  
  ]
  </script>
  
  <style scoped>
  
  </style>
  