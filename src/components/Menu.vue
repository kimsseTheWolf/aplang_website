<script setup>
import { onMounted, ref, defineProps, watch } from 'vue';
import { animate } from 'animejs';

const componentID = ref(`component-${crypto.randomUUID()}`);
const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
});

function increaseTransparent() {
    animate(`#${componentID.value}`, {
        opacity: {
            to: 0,
            duration: 100,
            easing: 'easeInOutQuad',
        },
    });
}

function decreaseTransparent() {
    animate(`#${componentID.value}`, {
        opacity: {
            to: 1,
            duration: 100,
            easing: 'easeInOutQuad',
        },
    });
}

watch(() => props.show, (newVal) => {
    if (newVal) {
        decreaseTransparent();
    } else {
        increaseTransparent();
    }
});

</script>
<template>
    <div class="menu-container" :id="componentID">
        <slot name="content"/>
    </div>
</template>
<style scoped>
.menu-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 7px;
    border-radius: 10px;
    background-color: rgba(55, 55, 55, 0.5);
    color: white;
    backdrop-filter: blur(10px);
    transition: background-color 0.1s ease;
}
</style>