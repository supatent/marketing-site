<template>
  <!-- Part of intentionally dark chat interface (dark in both light and dark modes) -->
  <div class="flex gap-3 mb-4 animate-fadeInUp">
    <!-- Bot Avatar (matches agent messages from ChatMessage.vue) -->
    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex items-center justify-center flex-shrink-0">
      <!-- Robot icon SVG -->
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

    <!-- Typing dots bubble (matches agent message bubble styling) -->
    <div class="inline-block">
      <div class="flex gap-1.5 px-4 py-3.5 bg-white/[0.08] rounded-2xl rounded-bl-sm w-fit">
        <span class="w-2 h-2 rounded-full bg-[#A0A0A8] animate-typingDot1" />
        <span class="w-2 h-2 rounded-full bg-[#A0A0A8] animate-typingDot2" />
        <span class="w-2 h-2 rounded-full bg-[#A0A0A8] animate-typingDot3" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Presentational component with typing animation
</script>

<style scoped>
/* Add fadeInUp animation to match other messages */
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

/* Typing dot bounce animations */
@keyframes typingAnimation {
  0%,
  60%,
  100% {
    opacity: 0.3;
    transform: translateY(0);
  }
  30% {
    opacity: 1;
    transform: translateY(-6px);
  }
}

.animate-typingDot1 {
  animation: typingAnimation 1.4s infinite ease-in-out;
  animation-delay: 0s;
}

.animate-typingDot2 {
  animation: typingAnimation 1.4s infinite ease-in-out;
  animation-delay: 0.2s;
}

.animate-typingDot3 {
  animation: typingAnimation 1.4s infinite ease-in-out;
  animation-delay: 0.4s;
}
</style>
