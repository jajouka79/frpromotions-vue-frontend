<template>
    <div class="page freedom-fest-page w-full m-auto h-screen flex justify-center">
      
      <!-- props.msg:{{ props.msg }} -->
      <div class="w-full m-3 lg:w-2/3">

        <div class="lg:w-96 m-auto">
            <RouterLink :to="{ name: 'Home' }">
                <ButtonCnt :text="gotoFrText.toUpperCase()" />
            </RouterLink>
        </div>
            
        <div class="mt-3">

            <!-- <div class="lg:w-96 m-auto">
                <a :href="buyTicketsUrl" target="_blank">
                    <ButtonCnt text="Buy Tickets" class="my-3" />
                </a>
            </div> -->

            <div class="mr-2 w-full">
                <a target="_blank" :href="buyTicketsUrl">
                    <ButtonCnt class="text-uppercase w-full text-3xl" :text="buyText.toUpperCase()" />
                </a>
            </div>
       


            <div class="p-3 text-center">
                <p class="pb-3"><b>The finalised schedule will be available very soon</b></p>
                <p class="pb-3"><b>More updates coming soon, keep checking back ....</b></p>

                <p class="pb-3">We are pleased to announce the the 3rd annual Freedom Fest!</p>
                
                <p class="pb-3">Educational speakers and conscious music artists in a big Marquee in a field just over the road from the riverside pub
                     The Gate Hangs Well in Syston, Leicestershire.</p>

                <p class="pb-3">People gather to seek information on the political, financial, health and social issues facing us in these tumultuous times,
                     discuss possible solutions and to celebrate the rich resistance culture that has developed over the past few years.</p>
                
                <p class="pb-3">We have a variety of engaging and informative speakers and an impressive line-up of conscious music artists & DJs.</p>

                <p class="pb-3">We have food stalls, organic juices, vendors of all kinds, excercise & breathing sessions and much more.</p>

                <p class="pb-3">Well behaved dogs on leads are welcome</p>


                <h2 class="font-bold">CAMPING</h2>

                <p class="pb-3">Campers can set up from 10am on Friday 2nd August.</p>
                
                <p class="pb-3">Portaloos, drinking water will be provided. There will be no hot showers.</p>

                <p class="pb-3"><i>Send an email at frpromotions@protonmail.com for alternative payment methods.</i></p>


            </div>


            <img :src="posterUrl" />

            <div class="mr-2 my-8 w-full">
                <a target="_blank" :href="buyTicketsUrl">
                    <ButtonCnt class="text-uppercase w-full text-3xl" :text="buyText.toUpperCase()" />
                </a>
            </div>
      

            <div class="grid grid-cols-4 gap-4">
                <div v-for="(photo, index) in gallery" :key="index">
                    <a :href="photo" target="_blank">
                        <!-- <img :src="photo" /> -->
                        <Image :path="`${photo}`" />
                    </a>
                </div>
            </div>
                
            <div class="lg:w-96 m-auto py-3">
                <RouterLink :to="{ name: 'Home' }">
                    <ButtonCnt :text="gotoFrText.toUpperCase()" />
                </RouterLink>
            </div>
                
      </div>

    </div>
</div>
  </template>
  
  <script setup>
 
import ButtonCnt from '../components/ButtonCnt.vue' ;
import Image from '../components/ImageCnt.vue' ;

const buyText = "Buy Freedom Fest Tickets";
 const gotoFrText = "Go To FR Promotions";
  const posterUrl = "https://activism2.s3.eu-west-2.amazonaws.com/Freedom+Fest+Poster+24-dev1.png"

  const buyTicketsUrl = "https://app.workshop-angel.com/form.php?h=1&t=0&e=0e59fb1a199e76cc";
  
  const gallery = [
  'DSC_0444.jpg',
  'DSC_0092.jpg',
  'DSC_0063.jpg',
  'DSC_0004.jpeg',
  'DSC_0009.jpg',
  'DSC_0199.jpg',
  'gate1.jpeg',
  'gate2.jpeg',
  'gate3.jpeg',
  'gate4.jpeg',
  'gate5.jpeg',
  'gate6.jpeg',
  'gate7.jpeg',
  'gate8.jpeg',
  'gate9.jpeg',
  'gate10.jpeg',
  'gate11.jpeg',
  'gate12.jpeg',
  'gate13.jpeg',
  'gate14.jpeg',


  'DSC_0560.jpg',
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
  