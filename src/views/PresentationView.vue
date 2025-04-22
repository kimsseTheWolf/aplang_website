<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import { ref } from 'vue';

const cp = ref(0);
</script>
<template>
    <NavigationBar :length="10" v-model:currentPage="cp"/>
</template>
<style scoped>
</style>