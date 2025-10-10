<template>
  <section class="min-h-screen bg-background dark:bg-background-dark flex flex-col items-center justify-center px-8 py-16 gap-12">
    <div class="max-w-4xl w-full text-center z-10">
      <!-- Rotating Headline -->
      <div class="flex flex-col items-start justify-center mb-16 min-h-[140px] ml-[12.5%]">
        <!-- First line: "Built for" -->
        <div
          class="text-font-primary dark:text-font-primary-dark font-normal"
          style="font-size: clamp(2rem, 6vw, 5rem);"
        >
          {{ tLanding('hero.builtFor') }}
        </div>

        <!-- Second line: Terminal prompt with rotating text -->
        <div
          class="flex items-baseline justify-start gap-2 h-[1.2em] w-full"
          style="font-size: clamp(2rem, 6vw, 5rem);"
        >
          <span class="text-font-muted dark:text-font-muted-dark">{{ tLanding('hero.separator') }}</span>
          <div class="inline-flex items-baseline text-left overflow-hidden relative">
            <span
              class="whitespace-nowrap min-w-[1ch] font-mono rotating-text-cursor"
              :style="{ color: currentTextColor }"
            >
              {{ currentText }}
            </span>
          </div>
        </div>
      </div>

      <!-- Subtitle -->
      <h2 class="text-xl leading-relaxed text-font-muted dark:text-font-muted-dark mb-10 max-w-3xl mx-auto">
        {{ tLanding('hero.subtitle') }}
      </h2>

      <!-- Chat Interface -->
      <ChatInterface
        :scenario="currentScenario"
        :paused="chatPaused"
        @pause="chatPaused = true"
        @resume="chatPaused = false"
        @scenario-complete="rotateToNextScenario"
      />

      <!-- Scenario Progress Indicator -->
      <div class="mt-6 text-center">
        <span class="text-sm text-font-muted dark:text-font-muted-dark">
          {{ tLanding('hero.scenarioProgress', { current: currentScenarioIndex + 1, total: scenarios.length }) }}
        </span>
      </div>
    </div>

    <!-- SDK Installation Section -->
    <SDKInstallSection />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import ChatInterface from './ChatInterface.vue'
import SDKInstallSection from './SDKInstallSection.vue'
import { useScenarioRotator } from './ScenarioRotator'
import { useTranslation } from '@/composables/useTranslation'

const { tLanding } = useTranslation()

// Rotating headline text (translated)
const headlineTexts = computed(() => [
  tLanding('hero.rotatingTexts.aiAgents'),
  tLanding('hero.rotatingTexts.claude'),
  tLanding('hero.rotatingTexts.chatgpt'),
  tLanding('hero.rotatingTexts.cursor'),
  tLanding('hero.rotatingTexts.claudeDesktop'),
  tLanding('hero.rotatingTexts.codex'),
  tLanding('hero.rotatingTexts.yourWorkflow'),
  tLanding('hero.rotatingTexts.windsurf'),
  tLanding('hero.rotatingTexts.yourVibe')
])

// Color mapping for each product
const colorMap: Record<string, string> = {
  'aiAgents': '#06B6D4',      // cyan
  'claude': '#d97757',         // peachy orange
  'chatgpt': '#0ea47e',        // green/teal
  'cursor': '#8967b8',         // purple
  'claudeDesktop': '#d97757',  // same as claude
  'codex': '#0ea47e',          // same as chatgpt
  'yourWorkflow': '#A855F7',   // purple
  'windsurf': '#55deb5',       // turquoise
  'yourVibe': '#22C55E'        // vibrant green
}

// Helper function to get color for current index
const getColor = (index: number): string => {
  const keys = ['aiAgents', 'claude', 'chatgpt', 'cursor', 'claudeDesktop', 'codex', 'yourWorkflow', 'windsurf', 'yourVibe']
  const key = keys[index % keys.length]
  return colorMap[key]
}

const currentIndex = ref(0)
const currentText = ref('')
const fullText = ref(headlineTexts.value[0])
const currentTextColor = ref(getColor(0))

const isTyping = ref(true)
const isDeleting = ref(false)

let typeInterval: ReturnType<typeof setTimeout> | null = null
let pauseTimeout: ReturnType<typeof setTimeout> | null = null

// Scenario rotation
const { scenarios, currentScenario, currentScenarioIndex, rotateToNextScenario } = useScenarioRotator()
const chatPaused = ref(false)

// Typewriter effect for rotating headline (adapted from ClaudeStyleHero)
const typeWriter = () => {
  if (isTyping.value && !isDeleting.value) {
    // Typing forward
    if (currentText.value.length < fullText.value.length) {
      currentText.value = fullText.value.slice(0, currentText.value.length + 1)
    } else {
      // Finished typing, pause then start deleting
      isTyping.value = false
      pauseTimeout = setTimeout(() => {
        isDeleting.value = true
        isTyping.value = true
      }, 2500) // Pause for 2.5 seconds when complete
    }
  } else if (isTyping.value && isDeleting.value) {
    // Deleting
    if (currentText.value.length > 0) {
      currentText.value = currentText.value.slice(0, -1)
    } else {
      // Finished deleting, move to next text
      isDeleting.value = false
      currentIndex.value = (currentIndex.value + 1) % headlineTexts.value.length
      fullText.value = headlineTexts.value[currentIndex.value]
      // Update color for new text
      currentTextColor.value = getColor(currentIndex.value)
    }
  }
}

// Lifecycle
onMounted(() => {
  // Start headline typewriter effect
  currentText.value = ''
  fullText.value = headlineTexts.value[0]

  const runTypewriter = () => {
    typeWriter()
    // Adjust speed based on current state
    const delay = isDeleting.value ? 30 : 80 // Faster when deleting
    typeInterval = setTimeout(runTypewriter, delay)
  }
  runTypewriter()
})

onUnmounted(() => {
  if (typeInterval) clearTimeout(typeInterval)
  if (pauseTimeout) clearTimeout(pauseTimeout)
})
</script>

<style scoped>
/* Blinking cursor for rotating text */
.rotating-text-cursor::after {
  content: '█';
  animation: blink 1s infinite;
  color: currentColor;
  font-style: normal;
  margin-left: 2px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .inline-flex.w-\[500px\] {
    width: 300px;
  }
}
</style>
