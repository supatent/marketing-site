<template>
  <div class="live-stats">
    <div class="stat-item">
      <span class="stat-value">{{ animatedStats.sites }}</span>
      <span class="stat-label">{{ tLanding('hero.stats.sitesAnalyzed') }}</span>
    </div>
    <div
      class="stat-divider"
      aria-hidden="true"
    >
      ·
    </div>
    <div class="stat-item">
      <span class="stat-value">{{ animatedStats.issues }}k</span>
      <span class="stat-label">{{ tLanding('hero.stats.issuesDetected') }}</span>
    </div>
    <div
      class="stat-divider"
      aria-hidden="true"
    >
      ·
    </div>
    <div class="stat-item">
      <span class="stat-value">{{ animatedStats.improved }}%</span>
      <span class="stat-label">{{ tLanding('hero.stats.avgImprovement') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTranslation } from '@/composables/useTranslation'

const { tLanding } = useTranslation()

interface Stats {
  sites: number
  issues: number
  improved: number
}

const targetStats: Stats = {
  sites: 12453,
  issues: 87,
  improved: 94
}

const animatedStats = ref<Stats>({
  sites: 0,
  issues: 0,
  improved: 0
})

const animateValue = (
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
) => {
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const easeOut = 1 - Math.pow(1 - progress, 3)
    const current = Math.round(start + (end - start) * easeOut)

    callback(current)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  // Delay animation for effect
  setTimeout(() => {
    animateValue(0, targetStats.sites, 2000, (value) => {
      animatedStats.value.sites = value
    })
    animateValue(0, targetStats.issues, 2000, (value) => {
      animatedStats.value.issues = value
    })
    animateValue(0, targetStats.improved, 2000, (value) => {
      animatedStats.value.improved = value
    })
  }, 1000)

  // Simulate live updates
  setInterval(() => {
    animatedStats.value.sites += Math.floor(Math.random() * 3)
  }, 5000)
})
</script>

<style scoped>
.live-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 4rem;
  font-family: 'JetBrains Mono', monospace;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 1s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--electric-blue);
  text-shadow: var(--electric-blue-glow);
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.25rem;
}

.stat-divider {
  color: var(--text-muted);
  opacity: 0.3;
}

@media (max-width: 768px) {
  .live-stats {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .stat-divider {
    display: none;
  }

  .stat-value {
    font-size: 1.5rem;
  }
}
</style>