<template>
  <section class="translation-section">
    <div class="container">
      <div class="section-header">
        <div class="icon-container">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            <path d="M8 12H16" />
            <path d="M12 8L16 12L12 16" />
          </svg>
        </div>
        <h2 class="section-title">
          {{ tLanding('features.translation.title') }}
        </h2>
        <p class="section-subtitle">
          {{ tLanding('features.translation.subtitle') }}
        </p>
      </div>

      <div class="feature-demo">
        <div class="demo-window">
          <div class="demo-header">
            <span class="demo-title">{{ tLanding('features.translation.demoTitle') }}</span>
          </div>
          <div class="demo-body">
            <div class="demo-line processing">
              <span class="check-icon">⏳</span>
              <span>{{ tLanding('features.translation.analyzing') }}</span>
            </div>
            <div class="demo-line success">
              <span class="check-icon">✓</span>
              <span>{{ tLanding('features.translation.detected') }}</span>
            </div>
            <div class="demo-line success">
              <span class="check-icon">✓</span>
              <span>{{ tLanding('features.translation.preserving') }}</span>
            </div>
            <div class="demo-line success">
              <span class="check-icon">✓</span>
              <span>{{ tLanding('features.translation.translated') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTranslation } from '@/composables/useTranslation'

const { tLanding } = useTranslation()
</script>

<style scoped>
@import '@/styles/terminal-velocity.css';

.translation-section {
  background: var(--color-background);
  padding: 8rem 2rem;
}

.dark .translation-section {
  background: var(--color-background-dark);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.section-header {
  margin-bottom: 4rem;
}

.icon-container {
  display: inline-flex;
  padding: 1.5rem;
  background: linear-gradient(135deg, #d4ffef 0%, #ccffe8 100%);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 255, 136, 0.15);
}

.dark .icon-container {
  background: linear-gradient(135deg, #001a14 0%, #00241a 100%);
  border-color: rgba(0, 255, 136, 0.4);
  box-shadow: 0 8px 32px rgba(0, 255, 136, 0.25);
}

.icon {
  width: 48px;
  height: 48px;
  color: var(--color-icon);
}

.dark .icon {
  color: var(--color-icon-dark);
}

.section-title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--color-icon) 0%, #06d6a0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--color-font-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.dark .section-subtitle {
  color: var(--color-font-muted-dark);
}

.feature-demo {
  max-width: 600px;
  margin: 0 auto;
}

.demo-window {
  background: linear-gradient(135deg, #effffa 0%, #e6fff5 100%);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(0, 255, 136, 0.15),
    inset 0 1px 0 rgba(0, 255, 136, 0.1);
}

.dark .demo-window {
  background: linear-gradient(135deg, #001810 0%, #002018 100%);
  border-color: rgba(0, 255, 136, 0.4);
  box-shadow:
    0 20px 60px rgba(0, 255, 136, 0.25),
    inset 0 1px 0 rgba(0, 255, 136, 0.15);
}

.demo-header {
  background: var(--bg-elevated);
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
}

.demo-title {
  color: var(--text-secondary);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}

.demo-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demo-line {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
}

.demo-line.success {
  background: rgba(6, 214, 160, 0.1);
  border: 1px solid rgba(6, 214, 160, 0.2);
  color: var(--success-green);
}

.demo-line.processing {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: var(--electric-blue);
}

.check-icon {
  font-size: 0.875rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .translation-section {
    padding: 6rem 2rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .demo-body {
    padding: 1.5rem;
  }
}
</style>