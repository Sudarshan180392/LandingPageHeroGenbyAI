import { getBaseUrl } from '../providerConfig.js'
import { getSystemPrompt, getUserPrompt } from '../prompts.js'

export const openaiAdapter = async ({ providerId, apiKey, model, businessDescription }) => {
  const url = getBaseUrl(providerId, model)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: getSystemPrompt() },
        { role: 'user', content: getUserPrompt(businessDescription) },
      ],
      temperature: 0.8,
      max_tokens: 1200,
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err?.error?.message || `HTTP ${response.status}: ${response.statusText}`)
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content || ''
}
