<template>
  <section class="seo-section">
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
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <h2 class="section-title">
          {{ tLanding('features.seo.title') }}
        </h2>
        <p class="section-subtitle">
          {{ tLanding('features.seo.subtitle') }}
        </p>
      </div>

      <div class="feature-demo">
        <div class="demo-window">
          <div class="demo-header">
            <span class="demo-title">{{ tLanding('features.seo.demoTitle') }}</span>
          </div>
          <div class="demo-body">
            <div class="demo-line success">
              <span class="check-icon">✓</span>
              <span>{{ tLanding('features.seo.scoring') }}</span>
            </div>
            <div class="demo-line success">
              <span class="check-icon">✓</span>
              <span>{{ tLanding('features.seo.metaTags') }}</span>
            </div>
            <div class="demo-line success">
              <span class="check-icon">✓</span>
              <span>{{ tLanding('features.seo.performance') }}</span>
            </div>
            <div class="demo-line success">
              <span class="check-icon">✓</span>
              <span>{{ tLanding('features.seo.ranking') }}</span>
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

.seo-section {
  background: var(--color-background);
  padding: 8rem 2rem;
}

.dark .seo-section {
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
  background: linear-gradient(135deg, #fff5e6 0%, #fff0d9 100%);
  border: 1px solid rgba(255, 107, 0, 0.3);
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(255, 107, 0, 0.15);
}

.dark .icon-container {
  background: linear-gradient(135deg, #1a0f00 0%, #241500 100%);
  border-color: rgba(255, 107, 0, 0.4);
  box-shadow: 0 8px 32px rgba(255, 107, 0, 0.25);
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
  background: linear-gradient(135deg, var(--color-icon) 0%, var(--warning-orange) 100%);
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
  background: linear-gradient(135deg, #fffbf5 0%, #fff9f0 100%);
  border: 1px solid rgba(255, 107, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(255, 107, 0, 0.15),
    inset 0 1px 0 rgba(255, 107, 0, 0.1);
}

.dark .demo-window {
  background: linear-gradient(135deg, #150c00 0%, #1f1200 100%);
  border-color: rgba(255, 107, 0, 0.4);
  box-shadow:
    0 20px 60px rgba(255, 107, 0, 0.25),
    inset 0 1px 0 rgba(255, 107, 0, 0.15);
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
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.2);
  color: var(--warning-orange);
}

.check-icon {
  font-size: 0.875rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .seo-section {
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