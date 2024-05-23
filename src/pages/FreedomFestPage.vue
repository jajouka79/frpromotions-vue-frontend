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


        Educational speakers and conscious music artists at The Gate Hangs Well Pub grounds in Syston, Leicester.


Send me an email at frpromotions@protonmail.com for alternative payment methods.

In August last year, Syston & District Social Club hosted the first Leicester Freedom Fest. People gathered to seek information on the political, financial, health and social issues facing us in these tumultuous times and discuss possible solutions and to celebrate the rich resistance culture that has developed over the past few years.

We are pleased to announce that this year Syston & District Social Club is hosting Freedom Fest, 2023. We have a variety of engaging and informative speakers and an A-list line-up of conscious music artists, DJs, camping, stalls.

CAMPING
UPDATE
Campers can set up from 10am on Friday 11th August.
Camping is available from Friday 11th & Saturday 12th August.
The campsite is in the grounds of the nearby Gate Hangs Well pub which is one mile away from the festival venue Syston & District Social Club.

Gate Hangs Well, Fosse Way, Syston, LE7 1NH
Outdoor toilets and water supply provided and the pub facilities will be available during opening hours.

Tents & vans must vacate from the campsite by 11am Sunday 13th August.
For those wanting to then stay for the acts on the Sunday there are places to park near the venue.

The prices are £10 per night for tents/vans.  


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
  