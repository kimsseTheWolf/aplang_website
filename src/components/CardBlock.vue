<template>
  <div class="card-block">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <div v-if="card.image" class="card-image">
        <img :src="card.image" alt="Card image" />
      </div>
      <div class="card-content">
        <slot :name="`card-${index}`" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.card-block {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Ensure images occupy max width while maintaining row height consistency, without centering text */
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align text to the top */
  align-items: stretch; /* Stretch items to fill the container width */
  flex: 1;
  min-width: calc(50% - 1rem); /* Ensures two cards per row */
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-image {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card-image img {
  max-width: 100%;
  height: auto; /* Ensures the image scales proportionally */
  border-radius: 8px;
}
</style>
