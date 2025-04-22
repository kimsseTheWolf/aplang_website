<script setup>
import { animate } from "animejs";
import { onMounted, ref } from "vue";

const componentID = ref("")

onMounted(() => {
    // generate a random uuid for this component
    componentID.value = `component-${crypto.randomUUID()}`
})

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
</script>
<template>
    <div class="round-btn-container" 
    :id="componentID" 
    @mousedown="handleMouseDown" 
    @mouseup="handleMouseUp" 
    @mouseleave="handleMouseUp">
        <slot name="icon" />
    </div>
</template>
<style scoped>
.round-btn-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: background-color 0.1s ease;
}

.round-btn-container:hover {
    background-color: rgba(255, 255, 255, 0.15);
}
</style>