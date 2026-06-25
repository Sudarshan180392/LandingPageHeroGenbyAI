import { getBaseUrl } from '../providerConfig.js'
import { getSystemPrompt, getUserPrompt } from '../prompts.js'

export const anthropicAdapter = async ({ apiKey, model, businessDescription }) => {
  const url = getBaseUrl('anthropic', model)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      system: getSystemPrompt(),
      messages: [
        { role: 'user', content: getUserPrompt(businessDescription) },
      ],
      max_tokens: 1200,
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err?.error?.message || `HTTP ${response.status}: ${response.statusText}`)
  }

  const data = await response.json()
  return data.content?.[0]?.text || ''
}
