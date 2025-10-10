<template>
  <section class="terminal-tabs-section">
    <div class="container">
      <div class="terminal-tabs-window">
        <div class="terminal-tabs-header">
          <div class="tabs">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              class="tab"
              :class="{ active: activeTab === index }"
              @click="activeTab = index"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div class="terminal-tabs-body">
          <transition
            name="fade"
            mode="out-in"
          >
            <div
              :key="activeTab"
              class="tab-content"
            >
              <!-- Content will be added here -->
              <div class="placeholder-content">
                <p>{{ tabs[activeTab].content }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  { label: 'Example 1', content: 'Content for Example 1 coming soon...' },
  { label: 'Example 2', content: 'Content for Example 2 coming soon...' },
  { label: 'Example 3', content: 'Content for Example 3 coming soon...' }
]
</script>

<style scoped>
.terminal-tabs-section {
  background: #0A0A0B;
  color: white;
  padding: 6rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.terminal-tabs-window {
  background: #1A1A1C;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 900px;
  margin: 0 auto;
}

.terminal-tabs-header {
  background: #242428;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.tabs {
  display: flex;
  gap: 0;
}

.tab {
  background: transparent;
  border: none;
  color: #A0A0A8;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  border-bottom: 2px solid transparent;
  position: relative;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #E0E0E8;
}

.tab.active {
  color: white;
  background: rgba(255, 255, 255, 0.08);
  border-bottom-color: #4A90E2;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #4A90E2;
}

.terminal-tabs-body {
  padding: 3rem;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-content {
  width: 100%;
  text-align: center;
}

.placeholder-content {
  color: #A0A0A8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .tabs {
    flex-direction: column;
  }

  .tab {
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    border-right: none;
  }

  .tab.active::after {
    display: none;
  }

  .tab.active {
    border-left: 3px solid #4A90E2;
  }

  .terminal-tabs-body {
    padding: 2rem;
    min-height: 300px;
  }
}
</style>