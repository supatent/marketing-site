<script setup lang="ts">
import { computed } from 'vue'
import TypingIndicator from './TypingIndicator.vue'
import type { ChatMessage } from './types'

const props = defineProps<{
  message: ChatMessage
}>()

const isUser = computed(() => props.message.type === 'user')
const isTyping = computed(() => props.message.type === 'typing')
</script>

<template>
  <!-- Part of intentionally dark chat interface (dark in both light and dark modes) -->
  <div
    class="flex gap-3 mb-4 items-end animate-fadeInUp"
    :class="{ 'flex-row-reverse': isUser }"
  >
    <!-- Avatar -->
    <div
      v-if="!isUser"
      class="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center flex-shrink-0"
    >
      <!-- Robot icon for agent -->
      <svg
        class="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="12"
          rx="2"
        />
        <path d="M9 16v-4m6 4v-4m-3-4h.01" />
      </svg>
    </div>

    <div
      v-else
      class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"
    >
      <!-- Person icon for user -->
      <svg
        class="w-5 h-5 text-white/70"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle
          cx="12"
          cy="7"
          r="4"
        />
      </svg>
    </div>

    <!-- Message bubble -->
    <div
      class="inline-block px-4 py-3.5 rounded-2xl max-w-md leading-relaxed text-[0.95rem] text-left"
      :class="[
        isUser
          ? 'bg-[#4A90E2] text-white rounded-br-sm'
          : 'bg-white/[0.08] text-[#E4E4E6] rounded-bl-sm'
      ]"
    >
      <TypingIndicator v-if="isTyping" />
      <span v-else>
        <span
          v-if="message.icon"
          class="mr-2"
        >{{ message.icon }}</span>
        {{ message.content }}
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.4s ease-out;
}
</style>
