<script setup>
import PositionDot from './PositionDot.vue';
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
    <div class="nav-bar-container nav-bar-position">
        <RoundButton @click="handlePrevPage" style="margin-right: 10px;">
            <template #icon>
                <img src="@/components/icons/left-btn.svg" />
            </template>
        </RoundButton>
        <PositionDot v-for="index in props.length" :key="index" :index="index - 1" :currentPage="currentPage"/>
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
}

.nav-bar-container:hover {
    background-color: rgba(65, 65, 65, 0.95);
}

.nav-bar-position {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}
</style>