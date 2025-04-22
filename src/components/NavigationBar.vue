<script setup>
import RoundButton from './RoundButton.vue';

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

function handleNextPage() {
    console.log("next", currModel.value < props.length - 1)
    if (currModel.value < props.length - 1) {
        currModel.value++;
    }
}

function handlePrevPage() {
    console.log("prev", currModel.value > 0)
    if (currModel.value > 0) {
        currModel.value--;
    }
}
</script>
<template>
    <div class="nav-bar-container">
        <RoundButton @click="handlePrevPage">
            <template #icon>
                <img src="@/components/icons/left-btn.svg" />
            </template>
        </RoundButton>
        <div>{{ currModel }} out of {{ length }}</div>
        <RoundButton @click="handleNextPage">
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
}
</style>