<script setup>
import PositionDot from './PositionDot.vue';
import RoundButton from './RoundButton.vue';

import { animate } from 'animejs';
import { onMounted } from 'vue';

const props = defineProps({
    length: {
        type: Number,
        required: true,
    },
});

const currModel = defineModel("currentPage", {
    type: Number,
    default: 0,
    required: true,
});

const emit = defineEmits(['update:currentPage']);

let timer = null;

function handleNextPage() {
    console.log("next", currModel.value < props.length - 1)
    if (currModel.value < props.length) {
        currModel.value++;
    }
}

function handlePrevPage() {
    console.log("prev", currModel.value > 0)
    if (currModel.value > 1) {
        currModel.value--;
    }
}

function increaseTransparent() {
    animate('#nav-bar', {
        opacity: {
            to: 0,
            duration: 100,
            easing: 'easeInOutQuad',
        },
    });
}

function decreaseTransparent() {
    animate('#nav-bar', {
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
    <div class="nav-bar-container nav-bar-position" id="nav-bar"
    @mouseenter="stopTimer" @mouseleave="startTimer">
        <RoundButton @click="handlePrevPage" style="margin-right: 10px;">
            <template #icon>
                <img src="@/components/icons/left-btn.svg" />
            </template>
        </RoundButton>
        <PositionDot v-for="index in props.length" :key="index" :index="index" :currentPage="currentPage"/>
        <RoundButton @click="handleNextPage" style="margin-left: 10px;">
            <template #icon>
                <img src="@/components/icons/right-btn.svg" />
            </template>
        </RoundButton>
    </div>
</template>
<style scoped>
.nav-bar-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 7px;
    border-radius: 50px;
    background-color: rgba(50, 50, 50, 0.85);
    color: white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background-color 0.1s ease;
    user-select: none;
    z-index: 1000; /* Ensures it stays on top */
}

.nav-bar-container:hover {
    background-color: rgba(65, 65, 65, 0.85);
}

.nav-bar-position {
    position: fixed; /* Changed to fixed to stay in the same position */
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000; /* Ensures it stays on top */
}
</style>