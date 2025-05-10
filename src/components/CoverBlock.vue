<template>
  <div class="cover-block">
    <div class="cover-content">
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
.cover-block {
  width: 100%;
  height: 100%; /* Changed to ensure it fits within the maximum available size */
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: linear-gradient(90deg, #ff7eb3, #ff758c);
  margin: 0;
  padding: 0;
}

.cover-content {
  max-width: 800px;
}

.cover-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cover-content p {
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
