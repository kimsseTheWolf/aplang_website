<template>
  <div class="expandable-card">
    <div class="card">
      <div v-if="image" class="card-image">
        <img :src="image" alt="Card image" />
      </div>
      <div class="card-content">
        <slot />
      </div>
      <RoundButton label="Expand" @click="showModal = true">
        <template #icon>
          <img src="@/components/icons/right-btn.svg" />
        </template>
      </RoundButton>
    </div>

    <Modal v-model:show="showModal" :show-sidebar="true">
      <template #sidebar>
        <slot name="sidebar" />
      </template>
      <template #content>
        <slot name="expanded-content" />
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import RoundButton from '@/components/RoundButton.vue';

const props = defineProps({
  image: {
    type: String,
    default: null,
  },
});

const showModal = ref(false);
</script>

<style scoped>
.expandable-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the left */
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.card-image img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.card-content {
  margin-bottom: 1rem;
}
</style>
