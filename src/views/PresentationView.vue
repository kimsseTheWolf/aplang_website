<script setup>
import AnchorGroup from '@/components/AnchorGroup.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import RoundButton from '@/components/RoundButton.vue';
import { ref } from 'vue';

const cp = ref(0);
</script>
<template>
    <AnchorGroup>
        <template #anchor>
            <RoundButton>
                <template #icon>
                    <img src="@/components/icons/menu-btn.svg" />
                </template>
            </RoundButton>
        </template>
    </AnchorGroup>
    <NavigationBar :length="10" v-model:currentPage="cp"/>
</template>
<style scoped>
</style>