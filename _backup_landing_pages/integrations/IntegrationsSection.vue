<template>
  <section class="bg-background dark:bg-background-dark text-font-primary dark:text-font-primary-dark py-24 px-8">
    <div class="max-w-screen-xl mx-auto">
      <!-- Content Icon -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex p-4 bg-icon/10 dark:bg-icon-dark/10 rounded-lg">
          <svg
            class="w-12 h-12 text-icon dark:text-icon-dark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      </div>

      <!-- Section Title and Subtitle -->
      <h2 class="text-4xl font-medium text-center mb-6 text-font-primary dark:text-font-primary-dark">
        {{ tLanding('integrations.title') }}
      </h2>
      <p class="text-lg text-font-muted dark:text-font-muted-dark text-center max-w-3xl mx-auto mb-16 leading-relaxed">
        {{ tLanding('integrations.subtitle') }}
      </p>

      <!-- Logos Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 my-16 p-12 bg-surface dark:bg-surface-dark rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">Lovable</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">Bolt</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <!-- Claude logo (starburst) - keep brand color -->
          <svg
            class="w-6 h-6 opacity-70"
            viewBox="0 0 24 24"
            fill="#CC785C"
          >
            <path d="M12 3l.9 3.5 2.6-2.4 0 3.7 3.2-1.8-1.8 3.2 3.7 0-2.4 2.6 3.5.9-3.5.9 2.4 2.6-3.7 0 1.8 3.2-3.2-1.8 0 3.7-2.6-2.4-.9 3.5-.9-3.5-2.6 2.4 0-3.7-3.2 1.8 1.8-3.2-3.7 0 2.4-2.6-3.5-.9 3.5-.9-2.4-2.6 3.7 0-1.8-3.2 3.2 1.8 0-3.7 2.6 2.4z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">Claude</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <!-- Google Gemini logo - keep brand gradient -->
          <svg
            class="w-6 h-6 opacity-70"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient
                id="gemini-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style="stop-color:#8E75B2"
                />
                <stop
                  offset="50%"
                  style="stop-color:#5E9ED6"
                />
                <stop
                  offset="100%"
                  style="stop-color:#3FBFEF"
                />
              </linearGradient>
            </defs>
            <path
              d="M12 2c0 4.5-3.5 8.5-8 10 1.5 0 3 .5 4.5 1.5S11 16 12 18c0-2 1-3.5 2.5-4.5s3-1.5 4.5-1.5c-4.5-1.5-8-5.5-8-10z"
              fill="url(#gemini-gradient)"
            />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">Gemini</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.975 5.975 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">ChatGPT</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <!-- Cursor logo (text cursor/caret) -->
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 4v16h2V4h-2zm-2 2v2h2V6H9zm4 0v2h2V6h-2zm-4 10v2h2v-2H9zm4 0v2h2v-2h-2z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">Cursor</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <!-- v0 logo (simplified geometric) -->
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5l4 14L16 5h-3l-1 7-1-7H8z" />
            <circle
              cx="18"
              cy="18"
              r="3"
            />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">v0</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <!-- Replit logo (circular with inner shape) -->
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8h4v4h-4v-4z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">Replit</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">GitHub Copilot</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19a1.024 1.024 0 00-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06-.03.05-.035.07-.02.05-.03.075-.01.05-.02.088v7.63l.018.09.02.05.03.075.02.05.035.067.03.05.044.06.046.045.06.045.046.03.06.044.044.04.015.02 10.97 7.33c.164.11.354.163.543.163s.38-.054.543-.163l10.985-7.31.015-.02.044-.04.06-.044.046-.03.06-.046.046-.044.044-.06.03-.05.035-.07.02-.05.03-.074.018-.05.02-.087V8.182zm-11.994 6.025l-3.994-2.67 3.994-2.653 3.994 2.653-3.994 2.67zm-1.023-8.132L5.566 9.695l-2.47-1.654 7.887-5.27v3.304zm-7.888 3.61l-1.77 1.18v-2.36l1.77 1.18zm2.485 1.66l5.414 3.62v3.3l-7.884-5.27 2.47-1.65zm7.428 6.914v-3.3l5.414-3.62 2.47 1.65-7.884 5.27zm7.887-7.923l-1.77-1.18 1.77-1.18v2.36zm-2.485-1.66L13.01 5.07V1.77l7.884 5.268-2.47 1.65z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">CodePen</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <!-- Supabase logo - keep brand color -->
          <svg
            class="w-6 h-6 opacity-70"
            viewBox="0 0 24 24"
            fill="#3ECF8E"
          >
            <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">Supabase</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <svg
            class="w-6 h-6 text-font-muted dark:text-font-muted-dark opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 1L1 21h22L12 1z" />
          </svg>
          <span class="text-sm text-font-muted dark:text-font-muted-dark font-sans">Vercel</span>
        </div>
      </div>

      <!-- Connects Section -->
      <div class="my-16 text-center">
        <h3 class="text-3xl font-medium mb-6 text-font-primary dark:text-font-primary-dark">
          {{ tLanding('integrations.connectsTitle') }}
        </h3>
        <p class="text-base text-font-muted dark:text-font-muted-dark max-w-2xl mx-auto leading-relaxed">
          {{ tLanding('integrations.connectsSubtitle') }}
        </p>
      </div>

      <!-- CTA Section -->
      <div class="mt-24 text-center py-16 px-8 bg-surface dark:bg-surface-dark rounded-lg">
        <div class="inline-flex p-6 bg-icon/10 dark:bg-icon-dark/10 rounded-lg mb-8">
          <svg
            class="w-12 h-12 text-icon dark:text-icon-dark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </div>
        <h2 class="text-4xl font-medium mb-8 leading-tight text-font-primary dark:text-font-primary-dark">
          {{ tLanding('integrations.ctaTitle') }}
        </h2>

        <div class="mt-8 overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div class="flex overflow-hidden mb-4">
            <div class="flex gap-4 whitespace-nowrap animate-scroll-left hover:[animation-play-state:paused]">
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.gdprCompliance') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.legalDisclaimers') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.plagiarismDetection') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.analyticsConsent') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.multiJurisdiction') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.factChecking') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.hateSpeechFilter') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.financialDisclaimers') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.dataPrivacy') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.contentVersioning') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.medicalDisclaimers') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.brandConsistency') }}</span>
              <!-- Duplicate for seamless loop -->
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.gdprCompliance') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.legalDisclaimers') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.plagiarismDetection') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.analyticsConsent') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.multiJurisdiction') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.factChecking') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.hateSpeechFilter') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.financialDisclaimers') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.dataPrivacy') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.contentVersioning') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.medicalDisclaimers') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.brandConsistency') }}</span>
            </div>
          </div>

          <div class="flex overflow-hidden">
            <div class="flex gap-4 whitespace-nowrap animate-scroll-right hover:[animation-play-state:paused]">
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.translationAccuracy') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.ccpaCompliance') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.termsOfService') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.culturalSensitivity') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.accessibilityStandards') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.ageAppropriate') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.copyrightVerification') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.rollbackProtection') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.seoSafety') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.aiDisclosure') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.auditTrails') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.localRegulations') }}</span>
              <!-- Duplicate for seamless loop -->
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.translationAccuracy') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.ccpaCompliance') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.termsOfService') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.culturalSensitivity') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.accessibilityStandards') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.ageAppropriate') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.copyrightVerification') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.rollbackProtection') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.seoSafety') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.aiDisclosure') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.auditTrails') }}</span>
              <span class="inline-block py-2.5 px-5 bg-hover dark:bg-hover-dark rounded-3xl text-font-muted dark:text-font-muted-dark text-sm flex-shrink-0 transition-all duration-300 hover:bg-surface-selected dark:hover:bg-surface-selected-dark hover:text-font-primary dark:hover:text-font-primary-dark hover:scale-105">{{ tLanding('integrations.tags.localRegulations') }}</span>
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
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  animation: scroll-left 60s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 60s linear infinite;
}
</style>