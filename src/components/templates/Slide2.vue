<template>
    <PageHeader title="Current Issue Overview" backgroundColor="#f5f5f5" />
  <MultiContentBlock leftType="text" rightType="media">
    <template #left>
      <img src="/question-circle.svg"/>
      <h2>What is going on?</h2>
      <p>
        The teen drug use issue is still a significant concern in middle and high schools across the United States. 
        Recent data show that roughly 1 in 10 eighth graders, 1 in 5 tenth graders, and 1 in 3 twelfth graders reported having drug-related issues in the past year. 
        This means by senior year, about 31% of students have tried an illegal substance in the last 12 months. 
        The most commonly used substances are alcohol, vaping products (nicotine), and marijuana. 
        While overall teen drug use has gone down over the past few decades (reaching some of the lowest levels in years), 
        the danger associated with drug use has increased. 
        In particular, youth overdose deaths have increased largely due to potent synthetic opioids like fentanyl being mixed into pills and other drugs.
      </p>
    </template>
    <template #right>
      <GraphBlock />
    </template>
  </MultiContentBlock>
</template>

<script setup>
import MultiContentBlock from '@/components/MultiContentBlock.vue';
import GraphBlock from '@/components/templates/Graphs/GraphBlock.vue';
import PageHeader from '@/components/PageHeader.vue';
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
      console.log('Slide 2 activated');
      // Add any reinitialization logic here if needed
    }
  }
);

onActivated(() => {
  console.log('Slide 2 reactivated');
  // Add any reinitialization logic here if needed
});
</script>

<style scoped>
p {
  line-height: 1.8; /* Adjusted line spacing for better readability */
}
</style>
