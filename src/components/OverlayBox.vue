<script setup>

import { onMounted, ref, defineProps, watch } from 'vue';
import { animate } from 'animejs';

const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
    transparentcy: {
        type: Number,
        default: 0.5,
    }
});

const isShowing = ref(props.show.valueOf());

const componentID = ref(`component-${crypto.randomUUID()}`);
const opacity = ref(0);

function increaseTransparent() {
    animate(`#${componentID.value}`, {
        opacity: {
            to: 0,
            duration: 100,
            easing: 'easeInOutQuad',
        },
        onComplete: () => {
            isShowing.value = false;
        }
    });
}

function decreaseTransparent() {
    animate(`#${componentID.value}`, {
        opacity: {
            to: 1,
            duration: 100,
            easing: 'easeInOutQuad',
        },
        onBegin: () => {
            isShowing.value = true;
        }
    });
}

onMounted(() => {
    increaseTransparent()
})

watch(() => props.show, (newVal) => {
    if (newVal) {
        decreaseTransparent();
    } 
    else {
        increaseTransparent();
    }
});

</script>
<template>
    <div class="overlay-box-container" :id="componentID" v-show="isShowing">
        <slot name="content"/>
    </div>
</template>
<style scoped>
.overlay-box-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, v-bind(transparentcy));
    color: white;
    backdrop-filter: blur(10px);
    opacity: 0;
}
</style>