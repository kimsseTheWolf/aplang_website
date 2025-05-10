<template>
  <div class="content-block">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",
};
</script>

<style scoped>
.content-block {
  margin: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: transparent;
  color: white;
  transition: background-color 0.1s ease;
}

.content-block:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
