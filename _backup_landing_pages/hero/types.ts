export interface ChatMessage {
  id: string
  type: 'user' | 'agent'
  content: string
  icon?: string  // emoji like ✓, 🔍, 🌐, 🖼️
  timestamp?: number
}

export interface Scenario {
  id: string
  title: string
  messages: ChatMessage[]
}
