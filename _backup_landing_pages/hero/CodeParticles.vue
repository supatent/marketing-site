<template>
  <div class="code-particles-container">
    <span
      v-for="particle in particles"
      :key="particle.id"
      class="code-particle"
      :style="{
        left: particle.x + '%',
        animationDuration: particle.duration + 's',
        animationDelay: particle.delay + 's',
        fontSize: particle.size + 'px'
      }"
    >
      {{ particle.char }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Particle {
  id: number
  char: string
  x: number
  duration: number
  delay: number
  size: number
}

const particles = ref<Particle[]>([])

const codeChars = [
  'const', 'let', 'var', '=>', '{}', '[]', '()', 'function',
  'return', 'if', 'else', 'for', 'while', 'import', 'export',
  '</', '/>', '===', '!==', '&&', '||', '++', '--',
  'async', 'await', 'class', 'extends', 'new', 'this',
  '0', '1', 'true', 'false', 'null', 'undefined',
  ';', ':', '?', '!', '@', '#', '$', '%', '^', '&', '*'
]

const generateParticles = () => {
  const particleCount = 30
  const newParticles: Particle[] = []

  for (let i = 0; i < particleCount; i++) {
    newParticles.push({
      id: i,
      char: codeChars[Math.floor(Math.random() * codeChars.length)],
      x: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 10 + Math.random() * 8
    })
  }

  particles.value = newParticles
}

onMounted(() => {
  generateParticles()
})
</script>

<style scoped>
.code-particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.code-particle {
  position: absolute;
  color: var(--electric-blue);
  font-family: 'JetBrains Mono', monospace;
  opacity: 0;
  animation: fall linear infinite;
  text-shadow: 0 0 10px currentColor;
  will-change: transform, opacity;
}

@keyframes fall {
  0% {
    transform: translateY(-100vh) translateZ(0) rotate(0deg);
    opacity: 0;
  }
  5% {
    opacity: 0.15;
  }
  10% {
    opacity: 0.25;
  }
  90% {
    opacity: 0.25;
  }
  95% {
    opacity: 0.15;
  }
  100% {
    transform: translateY(100vh) translateZ(0) rotate(360deg);
    opacity: 0;
  }
}
</style>