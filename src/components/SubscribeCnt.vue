<template>
    <!-- <div class="font-bold">
        Subscribe to receive event information
    </div> -->

    <div class="my-8 grid grid-cols-2 gap-4">
        <div class="inline">
            <div class="mr-2 ">
                <a target="_blank" href="https://linktr.ee/frpromotions">
                    <Button class="text-uppercase" text="Links" />
                </a>
            </div>
        </div>
        <div class="inline">
            <div class="mr-2">
                <a target="_blank" href="https://linktr.ee/frpromotions">
                    <Button text="Contact" />
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

makeTextFile('test text!!!');

</script>