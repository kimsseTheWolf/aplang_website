<script setup>
import LeftArrow from '@/components/icons/LeftArrow.vue';
import RoundButton from '@/components/RoundButton.vue'
</script>
<template>
    <RoundButton>
        <template #icon>
            <img src="@/components/icons/left-btn.svg"/>
        </template>
    </RoundButton>
    <RoundButton>
        <template #icon>
            <img src="@/components/icons/right-btn.svg"/>
        </template>
    </RoundButton>
</template>
<style scoped>
</style>