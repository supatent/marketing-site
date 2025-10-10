<template>
  <div
    class="skeleton-loader"
    :class="type"
  >
    <div class="skeleton-shimmer" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'text' | 'title' | 'card' | 'terminal' | 'button'
  width?: string
  height?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  width: '100%',
  height: 'auto'
})
</script>

<style scoped>
.skeleton-loader {
  position: relative;
  overflow: hidden;
  background: var(--bg-elevated);
  border-radius: 4px;
  display: inline-block;
  width: v-bind(width);
  height: v-bind(height);
}

.skeleton-loader.text {
  height: 1em;
  margin: 0.5em 0;
}

.skeleton-loader.title {
  height: 2em;
  margin: 1em 0;
  max-width: 300px;
}

.skeleton-loader.card {
  height: 150px;
  border-radius: 8px;
}

.skeleton-loader.terminal {
  height: 300px;
  border-radius: 8px;
  border: 1px solid rgba(0, 212, 255, 0.1);
}

.skeleton-loader.button {
  height: 48px;
  width: 150px;
  border-radius: 6px;
}

.skeleton-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 212, 255, 0.05),
    transparent
  );
  animation: shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>