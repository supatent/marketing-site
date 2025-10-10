import { ref, computed } from 'vue'
import type { Scenario } from './types'
import { useTranslation } from '@/composables/useTranslation'

export function useScenarioRotator() {
  const { tLanding } = useTranslation()

  const scenarios = computed<Scenario[]>(() => [
    {
      id: 'translation',
      title: tLanding('scenarios.translation.title'),
      messages: [
        {
          id: 'trans-1',
          type: 'user',
          content: tLanding('scenarios.translation.messages.user')
        },
        {
          id: 'trans-2',
          type: 'agent',
          content: tLanding('scenarios.translation.messages.agent1')
        },
        {
          id: 'trans-3',
          type: 'agent',
          content: tLanding('scenarios.translation.messages.agent2'),
          icon: '✓'
        },
        {
          id: 'trans-4',
          type: 'agent',
          content: tLanding('scenarios.translation.messages.agent3'),
          icon: '✓'
        },
        {
          id: 'trans-5',
          type: 'agent',
          content: tLanding('scenarios.translation.messages.agent4'),
          icon: '🎉'
        }
      ]
    },
    {
      id: 'seo',
      title: tLanding('scenarios.seo.title'),
      messages: [
        {
          id: 'seo-1',
          type: 'user',
          content: tLanding('scenarios.seo.messages.user')
        },
        {
          id: 'seo-2',
          type: 'agent',
          content: tLanding('scenarios.seo.messages.agent1')
        },
        {
          id: 'seo-3',
          type: 'agent',
          content: tLanding('scenarios.seo.messages.agent2'),
          icon: '🔍'
        },
        {
          id: 'seo-4',
          type: 'agent',
          content: tLanding('scenarios.seo.messages.agent3'),
          icon: '✓'
        },
        {
          id: 'seo-5',
          type: 'agent',
          content: tLanding('scenarios.seo.messages.agent4'),
          icon: '✓'
        },
        {
          id: 'seo-6',
          type: 'agent',
          content: tLanding('scenarios.seo.messages.agent5'),
          icon: '🚀'
        }
      ]
    },
    {
      id: 'import',
      title: tLanding('scenarios.import.title'),
      messages: [
        {
          id: 'import-1',
          type: 'user',
          content: tLanding('scenarios.import.messages.user')
        },
        {
          id: 'import-2',
          type: 'agent',
          content: tLanding('scenarios.import.messages.agent1')
        },
        {
          id: 'import-3',
          type: 'agent',
          content: tLanding('scenarios.import.messages.agent2'),
          icon: '🌐'
        },
        {
          id: 'import-4',
          type: 'agent',
          content: tLanding('scenarios.import.messages.agent3'),
          icon: '✓'
        },
        {
          id: 'import-5',
          type: 'agent',
          content: tLanding('scenarios.import.messages.agent4'),
          icon: '✓'
        },
        {
          id: 'import-6',
          type: 'agent',
          content: tLanding('scenarios.import.messages.agent5'),
          icon: '✨'
        }
      ]
    },
    {
      id: 'images',
      title: tLanding('scenarios.images.title'),
      messages: [
        {
          id: 'img-1',
          type: 'user',
          content: tLanding('scenarios.images.messages.user')
        },
        {
          id: 'img-2',
          type: 'agent',
          content: tLanding('scenarios.images.messages.agent1')
        },
        {
          id: 'img-3',
          type: 'agent',
          content: tLanding('scenarios.images.messages.agent2'),
          icon: '🖼️'
        },
        {
          id: 'img-4',
          type: 'agent',
          content: tLanding('scenarios.images.messages.agent3'),
          icon: '✓'
        },
        {
          id: 'img-5',
          type: 'agent',
          content: tLanding('scenarios.images.messages.agent4'),
          icon: '✓'
        },
        {
          id: 'img-6',
          type: 'agent',
          content: tLanding('scenarios.images.messages.agent5'),
          icon: '🎉'
        }
      ]
    }
  ])

  const currentScenarioIndex = ref(0)
  const currentScenario = computed(() => scenarios.value[currentScenarioIndex.value])

  const rotateToNextScenario = () => {
    currentScenarioIndex.value = (currentScenarioIndex.value + 1) % scenarios.value.length
  }

  return {
    scenarios,
    currentScenario,
    currentScenarioIndex,
    rotateToNextScenario
  }
}
