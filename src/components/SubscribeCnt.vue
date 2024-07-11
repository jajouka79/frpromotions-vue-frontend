<template>
    <!-- <div class="font-bold">
        Subscribe to receive event information
    </div> -->

    <div class="my-8 grid grid-cols-2 gap-4">
        <div class="inline">
            <div class="mr-2 ">
                <a target="_blank" href="https://linktr.ee/frpromotions">
                    <Button class="text-uppercase" :text="props.linkText.toUpperCase()" />
                </a>
            </div>
        </div>
        <div class="inline">
            <div class="mr-2">
                <a target="_blank" href="https://linktr.ee/frpromotions">
                    <Button class="text-uppercase" :text="props.contactText.toUpperCase()" />
                </a>            
            </div>
        </div>

        <!-- <div class="inline">
            <div class="">
                <a href="http://eepurl.com/hZQNib">
                    <Button text="Subscribe" />
                </a>
            </div>
        </div> -->
    </div>
</template>
<script setup>
import Button from "./ButtonCnt.vue";
import { defineProps } from 'vue'

//const FILENAME = '../../email.txt'


let textFile = null;

const makeTextFile = (text) => {
    console.log("makeFile");
    const data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }


    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;

}

const props = defineProps({
    linkText: String,
    contactText: String
});

//console.log(props);

makeTextFile('test text!!!');

</script>