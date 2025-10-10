<template>
  <section class="bg-surface dark:bg-surface-dark py-24 px-8">
    <div class="max-w-screen-xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-medium mb-6 leading-tight text-font-primary dark:text-font-primary-dark">
          {{ tLanding('problems.title') }}
        </h2>
        <p class="text-lg text-font-muted dark:text-font-muted-dark max-w-2xl mx-auto leading-relaxed">
          {{ tLanding('problems.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
        <div class="bg-hover dark:bg-hover-dark rounded-lg p-8 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark">
          <div class="inline-flex p-3 bg-danger/10 dark:bg-danger/10 rounded-lg mb-6">
            <svg
              class="w-6 h-6 text-danger dark:text-danger-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-4 text-font-primary dark:text-font-primary-dark">
            {{ tLanding('problems.hallucinations.title') }}
          </h3>
          <p class="text-base text-font-muted dark:text-font-muted-dark leading-relaxed">
            {{ tLanding('problems.hallucinations.description') }}
          </p>
        </div>

        <div class="bg-hover dark:bg-hover-dark rounded-lg p-8 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark">
          <div class="inline-flex p-3 bg-warning/10 dark:bg-warning/10 rounded-lg mb-6">
            <svg
              class="w-6 h-6 text-warning dark:text-warning-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-4 text-font-primary dark:text-font-primary-dark">
            {{ tLanding('problems.contentDrift.title') }}
          </h3>
          <p class="text-base text-font-muted dark:text-font-muted-dark leading-relaxed">
            {{ tLanding('problems.contentDrift.description') }}
          </p>
        </div>

        <div class="bg-hover dark:bg-hover-dark rounded-lg p-8 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark">
          <div class="inline-flex p-3 bg-danger/10 dark:bg-danger/10 rounded-lg mb-6">
            <svg
              class="w-6 h-6 text-danger dark:text-danger-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-4 text-font-primary dark:text-font-primary-dark">
            {{ tLanding('problems.complianceRisk.title') }}
          </h3>
          <p class="text-base text-font-muted dark:text-font-muted-dark leading-relaxed">
            {{ tLanding('problems.complianceRisk.description') }}
          </p>
        </div>

        <div class="bg-hover dark:bg-hover-dark rounded-lg p-8 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark">
          <div class="inline-flex p-3 bg-warning/10 dark:bg-warning/10 rounded-lg mb-6">
            <svg
              class="w-6 h-6 text-warning dark:text-warning-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-medium mb-4 text-font-primary dark:text-font-primary-dark">
            {{ tLanding('problems.brandInconsistency.title') }}
          </h3>
          <p class="text-base text-font-muted dark:text-font-muted-dark leading-relaxed">
            {{ tLanding('problems.brandInconsistency.description') }}
          </p>
        </div>
      </div>

      <div class="text-center py-8 px-8 bg-hover dark:bg-hover-dark rounded-lg">
        <p class="text-lg text-font-primary dark:text-font-primary-dark max-w-2xl mx-auto leading-relaxed">
          {{ tLanding('problems.solution') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTranslation } from '@/composables/useTranslation'

const { tLanding } = useTranslation()
</script>