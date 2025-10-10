<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">
          {{ tLanding('cta.title') }}
        </h2>
        <p class="cta-description">
          {{ tLanding('cta.description') }}
        </p>

        <div class="cta-terminal">
          <div class="terminal-window compact">
            <div class="terminal-body">
              <div class="terminal-line input">
                {{ tLanding('cta.terminal.install') }}
              </div>
              <div class="terminal-line output">
                {{ tLanding('cta.terminal.installed') }}
              </div>
              <div class="terminal-line success">
                {{ tLanding('cta.terminal.ready') }}
              </div>
            </div>
          </div>
        </div>

        <div class="cta-actions">
          <button
            class="btn-electric large"
            @click="startNow"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            {{ tLanding('cta.buttons.startNow') }}
          </button>
          <button
            class="btn-ghost large"
            @click="viewDocs"
          >
            {{ tLanding('cta.buttons.viewDocs') }}
          </button>
        </div>

        <div class="trust-badges">
          <div class="badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{{ tLanding('cta.trustBadges.rating') }}</span>
          </div>
          <div class="badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
            <span>{{ tLanding('cta.trustBadges.compliance') }}</span>
          </div>
          <div class="badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="M12 6v6l4 2" />
            </svg>
            <span>{{ tLanding('cta.trustBadges.uptime') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Background decoration -->
    <div class="cta-bg-decoration">
      <div class="glow-orb orb-1" />
      <div class="glow-orb orb-2" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTranslation } from '@/composables/useTranslation'

const router = useRouter()
const { tLanding } = useTranslation()

const startNow = () => {
  router.push('/register')
}

const viewDocs = () => {
  window.open('https://docs.vms.dev', '_blank')
}
</script>

<style scoped>
@import '@/styles/terminal-velocity.css';

.cta-section {
  padding: 120px 0;
  background: linear-gradient(180deg, var(--bg-void) 0%, var(--bg-terminal) 50%, var(--bg-void) 100%);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.cta-content {
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 900;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--electric-blue) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.cta-terminal {
  max-width: 500px;
  margin: 2rem auto;
}

.terminal-window.compact {
  background: rgba(26, 26, 28, 0.8);
  backdrop-filter: blur(10px);
}

.terminal-window.compact .terminal-body {
  padding: 1.5rem;
  min-height: auto;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3rem 0;
}

.btn-electric.large,
.btn-ghost.large {
  padding: 18px 40px;
  font-size: 1.125rem;
}

.btn-electric.large svg {
  margin-right: 12px;
}

.trust-badges {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.badge svg {
  color: var(--electric-blue);
}

.cta-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: var(--electric-blue);
  top: -300px;
  left: -300px;
  animation: float 20s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--success-green);
  bottom: -200px;
  right: -200px;
  animation: float 15s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@media (max-width: 768px) {
  .cta-title {
    font-size: 2rem;
  }

  .cta-description {
    font-size: 1.1rem;
  }

  .trust-badges {
    gap: 1.5rem;
  }

  .badge {
    font-size: 0.875rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-electric.large,
  .btn-ghost.large {
    width: 100%;
    max-width: 300px;
  }
}
</style>