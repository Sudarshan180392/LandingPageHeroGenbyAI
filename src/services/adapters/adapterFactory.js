import { openaiAdapter } from './openaiAdapter.js'
import { anthropicAdapter } from './anthropicAdapter.js'
import { geminiAdapter } from './geminiAdapter.js'
import { getProviderConfig } from '../providerConfig.js'

export const getAdapter = (providerId) => {
  const config = getProviderConfig(providerId)
  if (!config) throw new Error(`Unknown provider: ${providerId}`)

  switch (config.adapter) {
    case 'anthropic': return anthropicAdapter
    case 'gemini': return geminiAdapter
    default: return openaiAdapter
  }
}
