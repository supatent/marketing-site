<template>
  <div class="mt-16 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
      <!-- SDK Installation (Left Column) -->
      <div class="bg-surface dark:bg-surface-dark border border-hover dark:border-hover-dark rounded-xl p-8">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-font-primary dark:text-font-primary-dark mb-2">
            {{ tLanding('sdkInstall.sdk.title') }}
          </h3>
          <p class="text-font-muted dark:text-font-muted-dark text-sm">
            {{ tLanding('sdkInstall.sdk.description') }}
          </p>
        </div>

        <!-- Code block intentionally dark in both modes (terminal appearance) -->
        <div
          class="bg-[#1A1A1C] border border-white/10 rounded-lg overflow-hidden cursor-pointer transition-colors duration-300 hover:border-white/20"
          @click="copyCode('sdk')"
        >
          <!-- Code Header -->
          <div class="flex justify-between items-center px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
            <span class="text-xs text-[#A0A0A3] font-medium">{{ tLanding('sdkInstall.sdk.codeLabel') }}</span>
            <button
              class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.05] hover:bg-white/[0.08] transition-colors text-xs text-[#E4E4E6]"
              :class="{ 'bg-green-500/20 hover:bg-green-500/20': copiedSdk }"
            >
              <svg
                v-if="!copiedSdk"
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <svg
                v-else
                class="w-4 h-4 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ copiedSdk ? tCommon('copied') : tCommon('copy') }}</span>
            </button>
          </div>

          <!-- Code Block -->
          <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
          <pre class="p-6 m-0 font-mono text-sm leading-relaxed text-[#E4E4E6] overflow-x-auto"><code>npm install vibe-cms-sdk

<span class="text-[#6B7280]">// Fetch published content</span>
<span class="text-[#C792EA]">import</span> { VibeCMS } <span class="text-[#C792EA]">from</span> <span class="text-[#89DDFF]">'vibe-cms-sdk'</span>
<span class="text-[#C792EA]">const</span> cms = <span class="text-[#C792EA]">new</span> <span class="text-[#82AAFF]">VibeCMS</span>({ apiKey: <span class="text-[#89DDFF]">'your-key'</span> })
<span class="text-[#C792EA]">const</span> posts = <span class="text-[#C792EA]">await</span> cms.collections.<span class="text-[#82AAFF]">get</span>(<span class="text-[#89DDFF]">'blog-posts'</span>)</code></pre>
          <!-- eslint-enable @intlify/vue-i18n/no-raw-text -->
        </div>
      </div>

      <!-- MCP Configuration (Right Column) -->
      <div class="bg-surface dark:bg-surface-dark border border-hover dark:border-hover-dark rounded-xl p-8">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-font-primary dark:text-font-primary-dark mb-2">
            {{ tLanding('sdkInstall.mcp.title') }}
          </h3>
          <p class="text-font-muted dark:text-font-muted-dark text-sm">
            {{ tLanding('sdkInstall.mcp.description') }}
          </p>
        </div>

        <!-- Code block intentionally dark in both modes (terminal appearance) -->
        <div
          class="bg-[#1A1A1C] border border-white/10 rounded-lg overflow-hidden cursor-pointer transition-colors duration-300 hover:border-white/20"
          @click="copyCode('mcp')"
        >
          <!-- Code Header -->
          <div class="flex justify-between items-center px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
            <span class="text-xs text-[#A0A0A3] font-medium">.mcp.json</span>
            <button
              class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.05] hover:bg-white/[0.08] transition-colors text-xs text-[#E4E4E6]"
              :class="{ 'bg-green-500/20 hover:bg-green-500/20': copiedMcp }"
            >
              <svg
                v-if="!copiedMcp"
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <svg
                v-else
                class="w-4 h-4 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{{ copiedMcp ? tCommon('copied') : tCommon('copy') }}</span>
            </button>
          </div>

          <!-- Code Block -->
          <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
          <pre class="p-6 m-0 font-mono text-sm leading-relaxed text-[#E4E4E6] overflow-x-auto"><code><span class="text-[#6B7280]">// .mcp.json</span>
{
  <span class="text-[#89DDFF]">"mcpServers"</span>: {
    <span class="text-[#89DDFF]">"vibe-cms"</span>: {
      <span class="text-[#89DDFF]">"url"</span>: <span class="text-[#C3E88D]">"https://your-instance.com/mcp"</span>,
      <span class="text-[#89DDFF]">"headers"</span>: {
        <span class="text-[#89DDFF]">"X-API-Key"</span>: <span class="text-[#C3E88D]">"your-api-key"</span>
      }
    }
  }
}</code></pre>
          <!-- eslint-enable @intlify/vue-i18n/no-raw-text -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from '@/composables/useTranslation'

const { tLanding, tCommon } = useTranslation()

// SDK code to copy
const sdkCode = `npm install vibe-cms-sdk

// Fetch published content
import { VibeCMS } from 'vibe-cms-sdk'
const cms = new VibeCMS({ apiKey: 'your-key' })
const posts = await cms.collections.get('blog-posts')`

// MCP code to copy
const mcpCode = `// .mcp.json
{
  "mcpServers": {
    "vibe-cms": {
      "url": "https://your-instance.com/mcp",
      "headers": {
        "X-API-Key": "your-api-key"
      }
    }
  }
}`

// Copied state
const copiedSdk = ref(false)
const copiedMcp = ref(false)

// Copy code to clipboard
const copyCode = async (type: 'sdk' | 'mcp') => {
  try {
    const code = type === 'sdk' ? sdkCode : mcpCode
    await navigator.clipboard.writeText(code)

    // Set copied state
    if (type === 'sdk') {
      copiedSdk.value = true
      setTimeout(() => {
        copiedSdk.value = false
      }, 2000)
    } else {
      copiedMcp.value = true
      setTimeout(() => {
        copiedMcp.value = false
      }, 2000)
    }
  } catch (error) {
    console.error('Failed to copy code:', error)
  }
}
</script>
