<script setup>
import anime from "animejs"
import { onMounted, ref } from "vue";

const componentID = ref("")

onMounted(() => {
    // generate a random uuid for this component
    componentID.value = crypto.randomUUID()
})

function handleMouseDown() {
    anime({
        targets: componentID.value,
        scale: 0.9,
        duration: 150,
        easing: 'easeOutQuad',
    });
}

function handleMouseUp() {
    anime({
        targets: componentID.value,
        scale: 1,
        duration: 150,
        easing: 'easeOutQuad',
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
    transition: background-color 0.1s ease;
}

.round-btn-container:hover {
    background-color: rgba(255, 255, 255, 0.15);
    border-style: solid;
    border-width: 1px;
    border-color: #adadad;
}
</style>