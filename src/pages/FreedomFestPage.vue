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

                <div class="italic text-red-600 my-5 font-bold">Last updated Monday 29th July, 10:00am</div>

                <div class="italic text-red-600 my-4 font-bold">Latest update</div>

                <div class=" mb-4">Unfortunately Mark Attwood has had to cancel</div>
                <div class=" mb-8">The water pipe has burst in the field so there's no tap for drinking water.</div>

                <div class="mb-8 font-bold">More updates coming soon, keep checking back here</div>

                <div class="text-xl">The schedule is now available, see below</div>


                <div class="pb-3 mt-8">We are pleased to announce the the 3rd annual Freedom Fest!</div>
                
                <div class="pb-3">Educational speakers and conscious music artists in a big Marquee in a field just over the road from the riverside pub
                     The Gate Hangs Well in Syston, Leicestershire.</div>

                <div class="pb-3">People gather to seek information on the political, financial, health and social issues facing us in these tumultuous times,
                     discuss possible solutions and to celebrate the rich resistance culture that has developed over the past few years.</div>
                
                <div class="pb-3">We have a variety of engaging and informative speakers and an impressive line-up of conscious music artists & DJs.</div>

                <div class="pb-3">We have food stalls, organic juices, vendors of all kinds, excercise & breathing sessions.</div>
                
                <div class="pb-3">Firepit, fire display, singarounds, drum circles, so bring your musical instruments!</div>

                <div class="pb-3">The sound from the marquee stops at 12:30</div>

                <div class="pb-3">Well behaved dogs on leads are welcome</div>



                <div class="text-xl my-8 font-bold">PAYMENT</div>

                <div class="pb-3">You can buy tickets online at www.frpromotions.co.uk or you can pay at the gate, if you are 
                    paying on the door cash is preferred. Please be aware that its better for us if you buy the tickets from 
                    the website beforehand so we can see the numbers of attendees and so we can pay for the infrastructre 
                    of the festival.

                </div>

                <div class="pb-3 my-8"><i>Send an email to frpromotions@protonmail.com for alternative payment methods.</i></div>


                    <div class="text-xl my-8 font-bold">LOCATION</div>

                <div class="pb-3">Contrary to the festival poster the event is not at the Gate Hangs Well, we have a much bigger space 
                    in a field just over the road. The postcode is LE74UZ. Lookout for FF24 signs to find the entrance.</div>

                <div class="text-xl my-8 font-bold">PARKING</div>

                <div class="pb-3">There's a field for car parking, the field closest to the entrance. Festival crew will be overseeing the 
                    parking so that no-one will be blocked in and can leave the site if they need to go away and come back.</div>

                <div class="text-xl my-8 font-bold">CAMPING</div>

                <div class="pb-3">Campers can set up from 10am on Friday 2nd August. We have a camping field and each 
                    person will need a ticket that includes camping. Portaloos and water will be provided. 
                    <b>Unfortunately there will be no showers this year</b>.</div>

                <div class="font-bold text-xl my-8">SCHEDULE</div>

                <div>
                    <div class="font-bold text-lg">FRIDAY 2ND AUGUST</div>

                    <div class="mt-4">17:00-18:00</div>
                    <div class="font-bold">Dave Voce</div>
                    <div>Survival gardening</div>
                    <div class="mt-4">18:15-19:15</div>
                    <div class="font-bold">Dr Jo Whittaker</div>
                    <div>Interactive talk from health expert “The Crystals & Water Experience"</div>
                    <div class="mt-4">19:30-20:30</div>
                    <div class="font-bold">Dog & Gun Band</div>
                    <div>House band from the Dog & Gun pub</div>
                    <div class="mt-4">20:45-21:45</div>	
                    <div class="font-bold">Jack & Rhett</div>
                    <div>Soulful songs from two Leicester music legends</div>
                    <div class="mt-4">21:45-22:15</div>
                    <div class="font-bold">Break</div>	
                    <div class="mt-4">22:15-23:15</div>
                    <div class="font-bold">Matt Hoy</div>
                    <div>Former singer of UB40</div>
                    <div class="mt-4">23:15-00:30</div>
                    <div class="font-bold">DJ Rasta Mikey</div>
                    <div>Reggae vibes</div>

                </div>


                <div class="my-8">
                    <div class="font-bold text-lg">SATURDAY 3RD AUGUST</div>

                    <div class="mt-4">12:00-12:10</div>	
                    <div class="font-bold">Mick the Ticket</div>	
                    <div>Veteran Freedom Activist</div>

                    <div class="mt-4">12:10-12:25</div>	
                    <div class="font-bold">Merve Gaskin</div>	
                    <div>The Tribe of Leicestershire</div>

                    <div>12:25-13:00</div>	
                    <div class="font-bold">Dr Teck Khong</div>	
                    <div>Retired GP, Alliance for Democracy & Freedom</div>

                    <div class="mt-4">13:00-14:00</div>	

                    <div class="font-bold">Break</div>	

                    <div class="mt-4">14:00-14:35</div>	
                    <div class="font-bold">John O’Looney</div>	
                    <div>The funeral director unafraid to tell the truth</div>

                    <div class="mt-4">14:50-15:25</div>	
                    <div class="font-bold">Dr Mohammed Adil</div>	
                    <div>Censored Doctor re-platformed</div>

                    <div class="mt-4">15:25-16:25</div>	

                    <div class="font-bold">Break</div>	

                    <div class="mt-4">16:25-16:50</div>	
                    <div class="font-bold">Fiona Rose Diamond</div>	
                    <div>“Truth Be Told” supporting the vax damaged</div>

                    <div class="mt-4">16:50-17:25</div>	
                    <div class="font-bold">Andrew Bridgen</div>	
                    <div>UK MP standing for truth & justice</div>

                    <div class="mt-4">17:25-17:55</div>	

                    <div class="font-bold">Break</div>	

                    <div class="mt-4">17:55-18:40</div>	
                    <div class="font-bold">The Lookout</div>	
                    <div>Blending melodic storytelling folk and old skool reggae rhythms</div>

                    <div class="mt-4">18:55-19:40</div>	
                    <div class="font-bold">Tommy Coyle</div>	
                    <div>Finely craft songs with prescient lyrics</div>

                    <div class="mt-4">19:55-20:40</div>	
                    <div class="font-bold">Ryan Sanders</div>	
                    <div>Pro-freedom, high energy grime rap</div>

                    <div class="mt-4">20:55-21:40</div>	
                    <div class="font-bold">Out of Karma</div>	
                    <div>Divine rebel vibes. Dub rock reggae band</div>

                    <div class="mt-4">21:40-00:10</div>	
                    <div class="font-bold">DJ Rasta Mikey</div>	
                    <div>Reggae sounds</div>

                </div>



                <div class="my-8">
                    <div class="font-bold text-lg">SUNDAY 4TH AUGUST</div>

                    <div class="mt-4">12:00-12:20</div>	
                    <div class="font-bold">Reiss Thompson</div>	
                    <div>Brotherhood Legion, Mental health through fitness</div>

                    <div class="mt-4">12:20-13:20</div>	
                    <div class="font-bold">Break</div>	

                    <div class="mt-4">13:20-14:20</div>	
                    <div class="font-bold">Mark Attwood</div>	
                    <div>Popular podcast host, punk poet & stand up comic</div>

                    <div class="mt-4">14:35-15:35</div>	
                    <div class="font-bold">Mystery speaker</div>	

                    <div class="mt-4">15:50-16:50</div>	
                    <div class="font-bold">Daz Nez</div>	
                    <div>Founder of Light paper, singer/songwriter</div>

                    <div class="mt-4">17:20-18:00</div>	
                    <div class="font-bold">Tri-Subversion</div>	
                    <div>Leicester Anti-Reset Punk Rock</div>

                    <div class="mt-4">18:00-19:00</div>	
                    <div class="font-bold">Break</div>	

                    <div class="mt-4">19:00-19:45</div>	
                    <div class="font-bold">Moonjuice</div>	
                    <div>A mix of subterranean grooves, northern light and anti-“new normal” blues</div>

                    <div class="mt-4">20:00-20:45</div>	
                    <div class="font-bold">Omnivibes</div>	
                    <div>Indian ragas with sitar blues rock</div>

                    <div class="mt-4">21:00-21:45</div>	
                    <div class="font-bold">The Mutineers</div>	
                    <div>Leicester rebel folk reggae soul mutineers</div>

                    <div class="mt-4">22:00-00:30</div>	
                    <div class="font-bold">Jam / Open Mic</div>	

                </div>

            </div>



            <div class="grid grid-cols-2 gap-4">

                <div class="mb-8 relative pb-[56.25%]">
                    <iframe class="w-full h-full absolute" width="560" height="315" src="https://www.youtube.com/embed/09OcMmCP-j0?si=tqaYjnd571VUA-HC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
    
                <div class="mb-8 relative pb-[56.25%]">
                    <iframe class="w-full h-full absolute" width="560" height="315" src="https://www.youtube.com/embed/fxjwPx2SmM0?si=ls9tuJj7bzZYfbIG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div class="mb-8 relative pb-[56.25%]">
                    <iframe class="w-full h-full absolute" width="560" height="315" src="https://www.youtube.com/embed/FJ_KEgV_8qs?si=JKaVFdVk4HOXKuCz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div class="mb-8 relative pb-[56.25%]">
                    <iframe class="w-full h-full absolute" width="560" height="315" src="https://www.youtube.com/embed/qiJxJOwcsWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            
            </div>

            
            <div class="grid grid-cols-4 gap-4">
                <div v-for="(photo, index) in gallery" :key="index">
                    <a :href="`${globals.s3Bucket}/${photo}`" target="_blank">
                        <!-- <img :src="photo" /> -->
                        <Image :path="`${photo}`" />
                    </a>
                </div>
            </div>



            <img class="my-8" :src="posterUrl" />

            <div class="mr-2 my-8 w-full">
                <a target="_blank" :href="buyTicketsUrl">
                    <ButtonCnt class="text-uppercase w-full text-3xl" :text="buyText.toUpperCase()" />
                </a>
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
  