<script setup>

import { animate } from "animejs";
import { onMounted } from "vue";

let timer = null;

function increaseTransparent() {
    animate('#a-group', {
        opacity: {
            to: 0,
            duration: 100,
            easing: 'easeInOutQuad',
        },
    });
}

function decreaseTransparent() {
    animate('#a-group', {
        opacity: {
            to: 1,
            duration: 100,
            easing: 'easeInOutQuad',
        },
    });
}

function startTimer() {
    console.log("timer start")
    timer = setTimeout(() => {
        console.log("hide emit")
        increaseTransparent();
    }, 3000);
}

function stopTimer() {
    console.log("timer stop")
    clearTimeout(timer);
    decreaseTransparent();
}

onMounted(() => {
    startTimer();
})
</script>
<template>
    <div class="anchor-group-container" id="a-group" @mouseenter="stopTimer" @mouseleave="startTimer">
        <slot name="anchor"/>
    </div>
</template>
<style scoped>
.anchor-group-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>