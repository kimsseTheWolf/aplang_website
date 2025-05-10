<template>
  <div class="page-header" ref="header">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="slot-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.page-header {
  width: 100vw;
  padding: 4rem 2rem; /* Increased top and bottom padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: linear-gradient(90deg, #ff7eb3, #ff758c); /* Static linear gradient background */
}

.header-content {
  max-width: 800px;
}

.header-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.header-content p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.slot-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
