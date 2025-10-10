<template>
  <section
    ref="sectionRef"
    class="power-grid-section"
  >
    <div class="container">
      <h2 class="section-title">
        <span class="electric-icon">⚡</span>
        {{ tLanding('features.powerGrid.title') }}
      </h2>

      <div class="features-container">
        <div class="feature-tabs">
          <button
            v-for="feature in features"
            :key="feature.id"
            class="feature-tab"
            :class="{ active: activeFeature === feature.id }"
            @click="activeFeature = feature.id"
          >
            <span class="feature-icon">{{ feature.icon }}</span>
            <span class="feature-name">{{ feature.title }}</span>
          </button>
        </div>

        <div class="feature-content">
          <transition
            name="slide"
            mode="out-in"
          >
            <div
              :key="activeFeature"
              class="terminal-window"
            >
              <div class="terminal-header">
                <div class="terminal-dots">
                  <span class="terminal-dot red" />
                  <span class="terminal-dot yellow" />
                  <span class="terminal-dot green" />
                </div>
                <div class="terminal-title">
                  {{ getActiveFeature().terminal }}
                </div>
              </div>

              <div class="terminal-body">
                <div
                  v-for="(line, index) in getActiveFeature().demo"
                  :key="index"
                  class="terminal-line"
                  :class="line.type"
                  :style="{ animationDelay: `${index * 0.3}s` }"
                >
                  {{ line.text }}
                </div>
              </div>
            </div>
          </transition>

          <div class="feature-description">
            <h3>{{ getActiveFeature().title }}</h3>
            <p>{{ getActiveFeature().description }}</p>
            <ul class="feature-benefits">
              <li
                v-for="benefit in getActiveFeature().benefits"
                :key="benefit"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M9 11l3 3L22 4" />
                </svg>
                {{ benefit }}
              </li>
            </ul>
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

interface Feature {
  id: string
  icon: string
  title: string
  terminal: string
  description: string
  benefits: string[]
  demo: Array<{ type: string; text: string }>
}

const activeFeature = ref('ai-safety')
const sectionRef = ref<HTMLElement>()

const features: Feature[] = [
  {
    id: 'ai-safety',
    icon: '🛡️',
    title: 'AI Content Safety',
    terminal: 'vms.safety',
    description: 'Protect your brand with intelligent content monitoring and instant rollback capabilities.',
    benefits: [
      'Detect AI-generated content instantly',
      'Automatic version control for every change',
      'One-click rollback to safe versions',
      'Copyright and plagiarism detection'
    ],
    demo: [
      { type: 'input', text: '$ vms check content --id post-123' },
      { type: 'output', text: 'Analyzing content...' },
      { type: 'warning', text: '⚠ AI-generated content detected (87% confidence)' },
      { type: 'warning', text: '⚠ Potential copyright issue in paragraph 3' },
      { type: 'success', text: '✓ Auto-saved as version 1.2.1' },
      { type: 'input', text: '$ vms rollback --to 1.2.0' },
      { type: 'success', text: '✓ Content restored to safe version' }
    ]
  },
  {
    id: 'translation',
    icon: '🌍',
    title: 'One-Click Translation',
    terminal: 'vms.translate',
    description: 'Expand globally with AI-powered translations that preserve your brand voice.',
    benefits: [
      'Translate to 100+ languages instantly',
      'Maintain brand voice and tone',
      'SEO-optimized for each market',
      'Context-aware translations'
    ],
    demo: [
      { type: 'input', text: '$ vms translate --to spanish,french,german' },
      { type: 'output', text: 'Analyzing content structure...' },
      { type: 'success', text: '✓ Spanish: 100% complete (SEO optimized)' },
      { type: 'success', text: '✓ French: 100% complete (SEO optimized)' },
      { type: 'success', text: '✓ German: 100% complete (SEO optimized)' },
      { type: 'output', text: '📊 Potential reach: +3.2M visitors/month' }
    ]
  },
  {
    id: 'seo',
    icon: '🚀',
    title: 'SEO on Autopilot',
    terminal: 'vms.optimize',
    description: 'Let AI optimize your content for search engines while you focus on creativity.',
    benefits: [
      'Real-time SEO scoring',
      'Automatic meta tag generation',
      'Keyword density optimization',
      'Schema markup automation'
    ],
    demo: [
      { type: 'input', text: '$ vms optimize --target "best cms 2024"' },
      { type: 'output', text: 'Analyzing SERP competition...' },
      { type: 'success', text: '✓ Title optimized (Score: 95/100)' },
      { type: 'success', text: '✓ Meta description enhanced' },
      { type: 'success', text: '✓ Added 5 LSI keywords naturally' },
      { type: 'success', text: '✓ Schema markup applied' },
      { type: 'output', text: '🎯 Ranking potential: Top 3 in 30 days' }
    ]
  },
  {
    id: 'versioning',
    icon: '🔄',
    title: 'Git-Style Versioning',
    terminal: 'vms.version',
    description: 'Track every change with developer-friendly version control for content.',
    benefits: [
      'Complete edit history',
      'Branch and merge content',
      'Collaborative workflows',
      'Instant rollback capability'
    ],
    demo: [
      { type: 'input', text: '$ vms commit -m "Updated pricing section"' },
      { type: 'success', text: '✓ Changes committed (v2.3.0)' },
      { type: 'input', text: '$ vms diff v2.2.0..v2.3.0' },
      { type: 'output', text: '+ Added enterprise pricing tier' },
      { type: 'output', text: '~ Modified starter plan features' },
      { type: 'output', text: '- Removed legacy discount code' }
    ]
  }
]

const getActiveFeature = () => {
  return features.find(f => f.id === activeFeature.value)!
}
</script>

<style scoped>
@import '@/styles/terminal-velocity.css';

.power-grid-section {
  padding: 100px 0;
  background: var(--color-background);
  position: relative;
}

.dark .power-grid-section {
  background: var(--color-background-dark);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features-container {
  margin-top: 3rem;
}

.feature-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-tab {
  background: linear-gradient(135deg, #e8f9ff 0%, #ddf5ff 100%);
  border: 1px solid rgba(0, 212, 255, 0.2);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-font-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.95rem;
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.1);
}

.dark .feature-tab {
  background: linear-gradient(135deg, #001820 0%, #002028 100%);
  border-color: rgba(0, 212, 255, 0.3);
  color: var(--color-font-muted-dark);
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.15);
}

.feature-tab:hover {
  background: linear-gradient(135deg, #d4f3ff 0%, #c7efff 100%);
  border-color: var(--electric-blue);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.25);
}

.dark .feature-tab:hover {
  background: linear-gradient(135deg, #002030 0%, #002838 100%);
}

.feature-tab.active {
  background: linear-gradient(135deg, #c0ebff 0%, #ade4ff 100%);
  border-color: var(--electric-blue);
  color: var(--electric-blue);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(0, 212, 255, 0.2);
}

.dark .feature-tab.active {
  background: linear-gradient(135deg, #003040 0%, #004050 100%);
  color: var(--electric-blue);
}

.feature-icon {
  font-size: 1.25rem;
}

.feature-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.terminal-line {
  opacity: 0;
  animation: terminalTyping 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes terminalTyping {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.section-animate-in .feature-tabs {
  animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.section-animate-in .feature-content {
  animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
  opacity: 0;
}

.feature-description h3 {
  font-size: 1.75rem;
  color: var(--color-font-primary);
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
}

.dark .feature-description h3 {
  color: var(--color-font-primary-dark);
}

.feature-description p {
  color: var(--color-font-muted);
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.dark .feature-description p {
  color: var(--color-font-muted-dark);
}

.feature-benefits {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-benefits li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-font-muted);
  margin-bottom: 0.75rem;
}

.dark .feature-benefits li {
  color: var(--color-font-muted-dark);
}

.feature-benefits svg {
  color: var(--success-green);
  flex-shrink: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-40px) scale(0.95);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(40px) scale(0.95);
}

@media (max-width: 968px) {
  .feature-content {
    grid-template-columns: 1fr;
  }

  .feature-tabs {
    gap: 0.5rem;
  }

  .feature-tab {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
}
</style>