<template>
  <section class="hero-terminal">
    <CodeParticles />

    <div
      class="hero-content"
      data-animate
    >
      <h1 class="glitch-text hero-title">
        <span class="prompt">$_</span> VMS
        <span class="blink-cursor" />
      </h1>

      <div
        class="hero-subtitle"
        :class="{ 'fade-in': titleAnimated }"
      >
        <TypeWriter
          :text="subtitleText"
          :speed="50"
          :delay="800"
          :show-cursor="true"
        />
      </div>

      <p
        class="hero-description"
        :class="{ 'fade-in-up': descriptionAnimated }"
      >
        {{ tLanding('hero.terminal.description') }}
      </p>

      <div
        class="hero-actions"
        :class="{ 'fade-in-up': actionsAnimated }"
      >
        <button
          class="btn-electric"
          @click="startFree"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="lightning-icon"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          {{ tLanding('hero.terminal.startFree') }}
        </button>
      </div>

      <LiveStats />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTranslation } from '@/composables/useTranslation'
import CodeParticles from './CodeParticles.vue'
import TypeWriter from '../shared/TypeWriter.vue'
import LiveStats from './LiveStats.vue'

const router = useRouter()
const { tLanding } = useTranslation()
const subtitleText = computed(() => tLanding('hero.terminal.typewriterText'))

// Animation states
const titleAnimated = ref(false)
const descriptionAnimated = ref(false)
const actionsAnimated = ref(false)

const startFree = () => {
  router.push('/register')
}

// Trigger animations in sequence
onMounted(() => {
  // Hero title animation
  setTimeout(() => {
    const heroTitle = document.querySelector('.hero-title')
    if (heroTitle) {
      heroTitle.classList.add('animate-in-scale')
    }
  }, 100)

  // Subtitle animation
  setTimeout(() => {
    titleAnimated.value = true
  }, 500)

  // Description animation
  setTimeout(() => {
    descriptionAnimated.value = true
  }, 1200)

  // Actions animation
  setTimeout(() => {
    actionsAnimated.value = true
  }, 1500)
})
</script>

<style scoped>
@import '@/styles/terminal-velocity.css';

.hero-title {
  opacity: 0;
  transform: scale(0.9);
}

.hero-title.animate-in-scale {
  animation: scaleIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin: 1rem 0 2rem;
  font-family: 'JetBrains Mono', monospace;
  min-height: 2rem;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.hero-subtitle.fade-in {
  opacity: 1;
}

.hero-description {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.hero-description.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}

.hero-actions {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.hero-actions.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}


.lightning-icon {
  margin-right: 8px;
}

@media (max-width: 768px) {
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>