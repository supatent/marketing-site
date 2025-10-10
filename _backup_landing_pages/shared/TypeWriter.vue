<template>
  <span class="typewriter-container">
    <span
      ref="textElement"
      class="typewriter-text"
    />
    <span
      v-if="showCursor"
      class="blink-cursor"
    />
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Props {
  text: string
  speed?: number
  delay?: number
  showCursor?: boolean
  onComplete?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  speed: 50,
  delay: 0,
  showCursor: true,
  onComplete: undefined
})

const textElement = ref<HTMLElement>()

const typeText = () => {
  if (!textElement.value) return

  textElement.value.innerHTML = ''
  let index = 0

  const type = () => {
    if (index < props.text.length) {
      textElement.value!.innerHTML += props.text.charAt(index)
      index++
      setTimeout(type, props.speed)
    } else {
      props.onComplete?.()
    }
  }

  setTimeout(type, props.delay)
}

onMounted(() => {
  typeText()
})

watch(() => props.text, () => {
  typeText()
})
</script>

<style scoped>
.typewriter-container {
  display: inline-flex;
  align-items: baseline;
  font-family: 'JetBrains Mono', monospace;
}

.typewriter-text {
  display: inline;
}
</style>