<template>
  <div class="multi-content-block">
    <div
      class="content-cell"
      :class="{ media: leftType === 'media', center: leftType === 'media' && leftAlignCenter }"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="content-cell"
      :class="{ media: rightType === 'media', center: rightType === 'media' && rightAlignCenter }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiContentBlock",
  props: {
    leftType: {
      type: String,
      default: "text",
    },
    rightType: {
      type: String,
      default: "text",
    },
    leftAlignCenter: {
      type: Boolean,
      default: false,
    },
    rightAlignCenter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.multi-content-block {
  display: flex;
  margin: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: transparent;
  color: white;
  transition: background-color 0.1s ease;
}

.multi-content-block:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.content-cell {
  flex: 1;
  padding: 1rem;
}

.content-cell.media {
  display: flex;
  justify-content: center;
}

.content-cell.media.center {
  align-items: center;
}
</style>
