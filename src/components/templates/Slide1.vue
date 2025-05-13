<template>
  <CoverBlock
    title="Confronting Teen Drug Use in U.S. Schools"
    description="The Crisis and the Response"
  />
</template>

<script setup>
import CoverBlock from '@/components/CoverBlock.vue';
import { onActivated, ref, watch } from 'vue';

const props = defineProps({
  isActive: Boolean,
});

const isActiveState = ref(false);

watch(
  () => props.isActive,
  (newVal) => {
    isActiveState.value = newVal;
    if (newVal) {
      console.log('Slide 1 activated');
      // Add any reinitialization logic here if needed
    }
  }
);

onActivated(() => {
  console.log('Slide 1 reactivated');
  // Add any reinitialization logic here if needed
});
</script>
