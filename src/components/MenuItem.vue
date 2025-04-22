<script setup>
import { ref, defineEmits } from 'vue';
import { animate } from 'animejs';

const componentID = ref(`component-${crypto.randomUUID()}`);

const emit = defineEmits(['onClick']);

function handleMouseDown() {
    animate(`#${componentID.value}`, {
        scale: {
            to: 0.9,
            duration: 150,
            easing: 'easeOutQuad',
        },
    });
}

function handleMouseUp() {
    animate(`#${componentID.value}`, {
        scale: {
            to: 1,
            duration: 150,
            easing: 'easeOutQuad',
        },
    });
}

function handleClick() {
    emit('onClick');
}
</script>
<template>
    <div class="menu-item-container" :id="componentID" @click="handleClick" @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mouseleave="handleMouseUp">
        <slot name="icon"/>
        <div style="margin-right: 7px;">&nbsp;</div>
        <slot name="text"/>
        <div style="margin-right: 7px;">&nbsp;</div>
    </div>
</template>
<style scoped>
.menu-item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    padding: 7px;
    border-radius: 10px;
    background-color: rgba(43, 43, 43, 0.5);
    color: white;
    backdrop-filter: blur(10px);
    transition: background-color 0.1s ease;
    cursor: pointer;
    user-select: none;
}

.menu-item-container:hover {
    background-color: rgba(65, 65, 65, 0.85);
}
</style>