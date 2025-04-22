<script setup>
import { computed, ref } from "vue";
const props = defineProps({
    index: {
        type: Number,
        required: true,
    },
    currentPage: {
        type: Number,
        required: true,
    },
});

const backgroundColor = computed(() => {
    return props.index === props.currentPage ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.2)";
});
</script>
<template>
<div class="position-dot">
    &nbsp;
</div>
</template>
<style scoped>
.position-dot {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: v-bind(backgroundColor);
    margin: 5px;
    cursor: pointer;
    user-select: none;
}
</style>