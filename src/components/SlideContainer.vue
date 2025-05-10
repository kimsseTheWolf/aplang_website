<template>
  <div class="slide-container">
    <slot></slot>
  </div>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
.slide-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  margin: 0;
  padding: 0;
}
</style>
