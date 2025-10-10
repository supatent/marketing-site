<template>
  <section class="power-grid">
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
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 class="section-title">
          {{ tLanding('features.powerGrid.title') }}
        </h2>
        <p class="section-subtitle">
          {{ tLanding('features.powerGrid.subtitle') }}
        </p>
      </div>

      <div class="features-terminal">
        <div class="feature-tabs">
          <button
            v-for="feature in features"
            :key="feature.id"
            class="feature-tab"
            :class="{ active: activeFeature === feature.id }"
            @click="activeFeature = feature.id"
          >
            <component
              :is="feature.icon"
              class="tab-icon"
            />
            <span class="tab-title">{{ feature.title }}</span>
          </button>
        </div>

        <div class="feature-demo">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-controls">
                <span class="terminal-dot red" />
                <span class="terminal-dot yellow" />
                <span class="terminal-dot green" />
              </div>
              <span class="terminal-title">{{ getActiveFeature().terminalTitle }}</span>
            </div>

            <div class="terminal-body">
              <div
                v-for="(command, index) in getActiveFeature().commands"
                :key="index"
                class="terminal-line"
              >
                <span
                  v-if="command.type === 'input'"
                  class="terminal-prompt"
                >$</span>
                <span
                  v-if="command.type === 'warning'"
                  class="terminal-icon warning"
                >⚠</span>
                <span
                  v-if="command.type === 'success'"
                  class="terminal-icon success"
                >✓</span>
                <span
                  v-if="command.type === 'process'"
                  class="terminal-icon process"
                >⏳</span>
                <span
                  class="terminal-text"
                  :class="command.type"
                >{{ command.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from '@/composables/useTranslation'

const { tLanding } = useTranslation()

const activeFeature = ref('ai-safety')

const features = [
  {
    id: 'ai-safety',
    icon: 'ShieldIcon',
    title: 'AI Content Safety',
    terminalTitle: 'vms.safety.check()',
    commands: [
      { type: 'input', text: 'vms check "Blog post about..."' },
      { type: 'warning', text: 'AI-generated content detected (87% confidence)' },
      { type: 'warning', text: 'Potential copyright issue in paragraph 3' },
      { type: 'success', text: 'Auto-saved version for rollback' },
      { type: 'input', text: 'vms rollback --version 1.2.0' },
      { type: 'success', text: 'Content restored to safe version' }
    ]
  },
  {
    id: 'instant-translation',
    icon: 'GlobeIcon',
    title: 'One-Click Translation',
    terminalTitle: 'vms.translate()',
    commands: [
      { type: 'input', text: 'vms translate --target="es,fr,de,ja"' },
      { type: 'process', text: 'Analyzing content structure...' },
      { type: 'success', text: 'Detected technical content' },
      { type: 'success', text: 'Preserving code examples' },
      { type: 'success', text: 'Translated to 4 languages' },
      { type: 'success', text: 'All formatting and links preserved' }
    ]
  },
  {
    id: 'seo-autopilot',
    icon: 'RocketIcon',
    title: 'SEO on Autopilot',
    terminalTitle: 'vms.seo.optimize()',
    commands: [
      { type: 'input', text: 'vms seo analyze --auto-fix' },
      { type: 'success', text: 'Real-time SEO scoring: 94/100' },
      { type: 'success', text: 'Automated meta tags generation' },
      { type: 'success', text: 'Performance monitoring built-in' },
      { type: 'success', text: 'Search ranking improved +23%' },
      { type: 'success', text: 'All optimizations applied automatically' }
    ]
  }
]

const getActiveFeature = () => {
  return features.find(f => f.id === activeFeature.value) || features[0]
}

</script>

<style scoped>
@import '@/styles/terminal-velocity.css';

.power-grid {
  background: var(--color-background);
  padding: 6rem 2rem;
}

.dark .power-grid {
  background: var(--color-background-dark);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.icon-container {
  display: inline-flex;
  padding: 1rem;
  background: linear-gradient(135deg, #f2edff 0%, #ebe3ff 100%);
  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(167, 139, 250, 0.15);
}

.dark .icon-container {
  background: linear-gradient(135deg, #100a1a 0%, #180f24 100%);
  border-color: rgba(167, 139, 250, 0.4);
  box-shadow: 0 8px 32px rgba(167, 139, 250, 0.25);
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
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--color-icon) 0%, var(--electric-blue) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-font-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.dark .section-subtitle {
  color: var(--color-font-muted-dark);
}

.features-terminal {
  max-width: 1000px;
  margin: 0 auto;
}

.feature-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.feature-tab {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #f5f2ff 0%, #eee8ff 100%);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 8px;
  color: var(--color-font-muted);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 0.875rem;
  box-shadow: 0 4px 12px rgba(167, 139, 250, 0.1);
}

.dark .feature-tab {
  background: linear-gradient(135deg, #0f0a15 0%, #150f20 100%);
  border-color: rgba(167, 139, 250, 0.3);
  color: var(--color-font-muted-dark);
  box-shadow: 0 4px 12px rgba(167, 139, 250, 0.15);
}

.feature-tab:hover {
  background: linear-gradient(135deg, #e8e0ff 0%, #dfd5ff 100%);
  border-color: var(--info-purple);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(167, 139, 250, 0.25);
}

.dark .feature-tab:hover {
  background: linear-gradient(135deg, #18102a 0%, #201530 100%);
}

.feature-tab.active {
  border-color: var(--info-purple);
  background: linear-gradient(135deg, #dbd0ff 0%, #cfc0ff 100%);
  color: var(--info-purple);
  box-shadow: 0 8px 32px rgba(167, 139, 250, 0.3), inset 0 1px 0 rgba(167, 139, 250, 0.2);
}

.dark .feature-tab.active {
  background: linear-gradient(135deg, #251540 0%, #301a50 100%);
  color: var(--info-purple);
}

.tab-icon {
  width: 18px;
  height: 18px;
}

.tab-title {
  font-weight: 500;
}

.feature-demo {
  background: var(--bg-terminal);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
}

.terminal-window {
  background: var(--bg-terminal);
}

.terminal-header {
  background: var(--bg-elevated);
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.terminal-controls {
  display: flex;
  gap: 0.5rem;
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dot.red { background: var(--error-red); }
.terminal-dot.yellow { background: var(--warning-orange); }
.terminal-dot.green { background: var(--success-green); }

.terminal-title {
  color: var(--text-secondary);
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 0.875rem;
}

.terminal-body {
  padding: 1.5rem;
  font-family: 'SF Mono', 'Consolas', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  min-height: 300px;
}

.terminal-line {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.terminal-prompt {
  color: var(--electric-blue);
  font-weight: bold;
  min-width: 12px;
}

.terminal-icon {
  min-width: 16px;
  font-size: 0.875rem;
}

.terminal-icon.success { color: var(--success-green); }
.terminal-icon.warning { color: var(--warning-orange); }
.terminal-icon.process { color: var(--electric-blue); }

.terminal-text {
  color: var(--text-secondary);
}

.terminal-text.input {
  color: var(--text-primary);
}

.terminal-text.success {
  color: var(--success-green);
}

.terminal-text.warning {
  color: var(--warning-orange);
}

.terminal-text.process {
  color: var(--electric-blue);
}

@media (max-width: 768px) {
  .feature-tabs {
    flex-direction: column;
    gap: 0.75rem;
  }

  .feature-tab {
    justify-content: center;
    padding: 0.75rem 1rem;
  }

  .terminal-body {
    padding: 1rem;
    font-size: 0.8rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .terminal-line {
    flex-direction: column;
    gap: 0.25rem;
  }

  .terminal-prompt,
  .terminal-icon {
    min-width: auto;
  }
}
</style>