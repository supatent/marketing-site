<template>
  <section class="bg-[var(--color-background)] dark:bg-[var(--color-background-dark)] text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)] py-32 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-semibold mb-4 bg-gradient-to-br from-[var(--color-icon)] to-[var(--color-icon-dark)] bg-clip-text text-transparent">
          {{ tLanding('pricing.title') }}
        </h2>
        <p class="text-xl text-[var(--color-font-muted)] dark:text-[var(--color-font-muted-dark)] max-w-2xl mx-auto">
          {{ tLanding('pricing.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Free Plan -->
        <div class="flex flex-col h-full bg-[var(--color-surface)] dark:bg-[var(--color-surface-dark)] border border-[var(--color-hover)] dark:border-[var(--color-hover-dark)] rounded-2xl p-10 relative transition-all duration-300 hover:bg-[var(--color-hover)] dark:hover:bg-[var(--color-hover-dark)] hover:-translate-y-1">
          <div class="text-center mb-8 pb-8 border-b border-[var(--color-hover)] dark:border-[var(--color-hover-dark)]">
            <h3 class="text-2xl font-semibold mb-4 text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)]">
              {{ tLanding('pricing.plans.free.name') }}
            </h3>
            <div class="flex flex-col items-center gap-1">
              <span class="text-5xl font-bold text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)] leading-none">{{ tLanding('pricing.plans.free.price') }}</span>
              <span class="text-base text-[var(--color-font-muted)] dark:text-[var(--color-font-muted-dark)]">{{ tLanding('pricing.plans.free.period') }}</span>
            </div>
          </div>

          <div class="flex flex-col flex-1 gap-8">
            <ul class="features-list flex-1">
              <li>{{ tLanding('pricing.plans.free.features.contentPieces') }}</li>
              <li>{{ tLanding('pricing.plans.free.features.aiSafety') }}</li>
              <li>{{ tLanding('pricing.plans.free.features.languages') }}</li>
              <li>{{ tLanding('pricing.plans.free.features.support') }}</li>
            </ul>

            <router-link
              to="/register"
              class="mt-auto block w-full px-8 py-4 rounded-lg font-semibold text-base text-center no-underline transition-all duration-300 bg-[var(--color-surface)] dark:bg-[var(--color-surface-dark)] text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)] border border-[var(--color-hover)] dark:border-[var(--color-hover-dark)] hover:bg-[var(--color-hover)] dark:hover:bg-[var(--color-hover-dark)] hover:border-[#00D4FF] hover:-translate-y-0.5"
            >
              {{ tLanding('pricing.plans.free.cta') }}
            </router-link>
          </div>
        </div>

        <!-- Pro Plan (Featured) -->
        <div class="flex flex-col h-full pricing-card-featured bg-[var(--color-surface)] dark:bg-[var(--color-surface-dark)]  border rounded-2xl p-10 relative transition-all duration-300 hover:bg-[var(--color-hover)] dark:hover:bg-[var(--color-hover-dark)] hover:-translate-y-1">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00D4FF] text-[var(--bg-void)] px-4 py-2 rounded-full text-sm font-medium z-10 shadow-[0_4px_12px_rgba(0,212,255,0.3)]">
            {{ tLanding('pricing.mostPopular') }}
          </div>
          <div class="text-center mb-8 pb-8 border-b border-[var(--color-hover)] dark:border-[var(--color-hover-dark)]">
            <h3 class="text-2xl font-semibold mb-4 text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)]">
              {{ tLanding('pricing.plans.pro.name') }}
            </h3>
            <div class="flex flex-col items-center gap-1">
              <span class="text-5xl font-bold text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)] leading-none">{{ tLanding('pricing.plans.pro.price') }}</span>
              <span class="text-base text-[var(--color-font-muted)] dark:text-[var(--color-font-muted-dark)]">{{ tLanding('pricing.plans.pro.period') }}</span>
            </div>
          </div>

          <div class="flex flex-col flex-1 gap-8">
            <ul class="features-list flex-1">
              <li>{{ tLanding('pricing.plans.pro.features.contentPieces') }}</li>
              <li>{{ tLanding('pricing.plans.pro.features.aiSafety') }}</li>
              <li>{{ tLanding('pricing.plans.pro.features.languages') }}</li>
              <li>{{ tLanding('pricing.plans.pro.features.seo') }}</li>
              <li>{{ tLanding('pricing.plans.pro.features.versions') }}</li>
              <li>{{ tLanding('pricing.plans.pro.features.support') }}</li>
            </ul>

            <router-link
              to="/register"
              class="mt-auto block w-full px-8 py-4 rounded-lg font-semibold text-base text-center no-underline transition-all duration-300 bg-[var(--color-button-primary)] dark:bg-[var(--color-button-primary-dark)] text-[var(--color-font-primary-dark)] hover:bg-[var(--color-button-primary-hover)] dark:hover:bg-[var(--color-button-primary-dark-hover)] hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,212,255,0.25)]"
            >
              {{ tLanding('pricing.plans.pro.cta') }}
            </router-link>
          </div>
        </div>

        <!-- Enterprise Plan -->
        <div class="flex flex-col h-full bg-[var(--color-surface)] dark:bg-[var(--color-surface-dark)] border border-[var(--color-hover)] dark:border-[var(--color-hover-dark)] rounded-2xl p-10 relative transition-all duration-300 hover:bg-[var(--color-hover)] dark:hover:bg-[var(--color-hover-dark)] hover:-translate-y-1">
          <div class="text-center mb-8 pb-8 border-b border-[var(--color-hover)] dark:border-[var(--color-hover-dark)]">
            <h3 class="text-2xl font-semibold mb-4 text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)]">
              {{ tLanding('pricing.plans.enterprise.name') }}
            </h3>
            <div class="flex flex-col items-center gap-1">
              <span class="text-5xl font-bold text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)] leading-none">{{ tLanding('pricing.plans.enterprise.price') }}</span>
              <span class="text-base text-[var(--color-font-muted)] dark:text-[var(--color-font-muted-dark)]">{{ tLanding('pricing.plans.enterprise.period') }}</span>
            </div>
          </div>

          <div class="flex flex-col flex-1 gap-8">
            <ul class="features-list flex-1">
              <li>{{ tLanding('pricing.plans.enterprise.features.everything') }}</li>
              <li>{{ tLanding('pricing.plans.enterprise.features.customModels') }}</li>
              <li>{{ tLanding('pricing.plans.enterprise.features.deployment') }}</li>
              <li>{{ tLanding('pricing.plans.enterprise.features.security') }}</li>
              <li>{{ tLanding('pricing.plans.enterprise.features.support') }}</li>
              <li>{{ tLanding('pricing.plans.enterprise.features.sla') }}</li>
            </ul>

            <button class="mt-auto block w-full px-8 py-4 rounded-lg font-semibold text-base text-center transition-all duration-300 bg-[var(--color-surface)] dark:bg-[var(--color-surface-dark)] text-[var(--color-font-primary)] dark:text-[var(--color-font-primary-dark)] border border-[var(--color-hover)] dark:border-[var(--color-hover-dark)] hover:bg-[var(--color-hover)] dark:hover:bg-[var(--color-hover-dark)] hover:border-[#00D4FF] hover:-translate-y-0.5">
              {{ tLanding('pricing.plans.enterprise.cta') }}
            </button>
          </div>
        </div>
      </div>

      <div class="text-center text-[var(--color-font-muted)] dark:text-[var(--color-font-muted-dark)] text-base">
        <p>{{ tLanding('pricing.footer') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTranslation } from '@/composables/useTranslation'

const { tLanding } = useTranslation()
</script>

<style scoped>
@import '@/styles/terminal-velocity.css';

/* Featured card gradient overlay - can't be done with Tailwind */
.pricing-card-featured::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(0, 153, 204, 0.05) 100%);
  pointer-events: none;
}

.dark .pricing-card-featured::before {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(0, 153, 204, 0.08) 100%);
}

/* Features list checkmarks - can't set ::before content with Tailwind */
.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.features-list li {
  color: var(--color-font-muted);
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;
}

.dark .features-list li {
  color: var(--color-font-muted-dark);
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #00D4FF;
  font-weight: bold;
}
</style>