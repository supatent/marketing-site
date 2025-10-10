<template>
  <!-- Intentionally dark in both light and dark modes (simulates a real chat/terminal window) -->
  <div
    class="w-full max-w-4xl mx-auto"
    @mouseenter="$emit('pause')"
    @mouseleave="$emit('resume')"
  >
    <div class="bg-[#1A1A1C] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10">
      <!-- Chat Header -->
      <div class="bg-[#2D2D2D] px-4 py-3 flex items-center">
        <div class="flex gap-2">
          <span class="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span class="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span class="w-3 h-3 rounded-full bg-[#28CA42]" />
        </div>
        <div class="flex items-center gap-3 ml-4">
          <div class="flex flex-col">
            <span class="text-sm font-medium text-[#E2E8F0]">{{ agentName }}</span>
          </div>
        </div>
      </div>

      <!-- Chat Body -->
      <div
        ref="chatBody"
        class="p-6 h-[550px] overflow-y-auto bg-[#1E1E1E]"
      >
        <div>
          <ChatMessage
            v-for="message in visibleMessages"
            :key="message.id"
            :message="message"
          />
        </div>

        <!-- Typing indicator shown separately, always at bottom -->
        <TypingIndicator
          v-if="showTypingIndicator"
          key="typing-indicator"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import ChatMessage from './ChatMessage.vue'
import TypingIndicator from './TypingIndicator.vue'
import type { Scenario, ChatMessage as ChatMessageType } from './types'
import { HERO_TIMING } from './config'

interface Props {
  scenario: Scenario
  paused: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  pause: []
  resume: []
  scenarioComplete: []
}>()

const agentName = 'AI Agent'
const chatBody = ref<HTMLElement | null>(null)
const visibleMessages = ref<ChatMessageType[]>([])
const showTypingIndicator = ref(false)
const currentMessageIndex = ref(0)
let timeoutId: ReturnType<typeof setTimeout> | null = null

// Auto-scroll to bottom
const scrollToBottom = () => {
  nextTick(() => {
    if (chatBody.value) {
      chatBody.value.scrollTop = chatBody.value.scrollHeight
    }
  })
}

// Display messages sequentially with typing indicators
const showNextMessage = () => {
  if (props.paused) {
    // Schedule retry when unpaused
    timeoutId = setTimeout(showNextMessage, 100)
    return
  }

  if (currentMessageIndex.value >= props.scenario.messages.length) {
    // All messages shown, wait then emit completion
    timeoutId = setTimeout(() => {
      emit('scenarioComplete')
    }, HERO_TIMING.FINAL_WAIT_DURATION)
    return
  }

  const message = props.scenario.messages[currentMessageIndex.value]

  if (message.type === 'user') {
    // Show user message immediately
    visibleMessages.value.push(message)
    scrollToBottom()
    currentMessageIndex.value++
    // Proceed immediately to next message
    showNextMessage()
  } else if (message.type === 'agent') {
    // Show typing indicator first
    showTypingIndicator.value = true
    scrollToBottom()

    // After typing duration, hide typing and show agent message
    timeoutId = setTimeout(() => {
      showTypingIndicator.value = false
      visibleMessages.value.push(message)
      scrollToBottom()
      currentMessageIndex.value++

      // Immediately proceed to next message (no delay)
      showNextMessage()
    }, HERO_TIMING.TYPING_DURATION)
  }
}

// Watch scenario changes to reset and start showing new messages
watch(() => props.scenario, () => {
  // Clear any pending timeouts
  if (timeoutId !== null) {
    clearTimeout(timeoutId)
    timeoutId = null
  }

  // Reset state
  visibleMessages.value = []
  showTypingIndicator.value = false
  currentMessageIndex.value = 0

  // Start showing new scenario messages
  showNextMessage()
}, { immediate: true })
</script>

<style scoped>
/* Smooth scrolling for chat body */
.overflow-y-auto {
  scroll-behavior: smooth;
}

/* Custom scrollbar styling */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
