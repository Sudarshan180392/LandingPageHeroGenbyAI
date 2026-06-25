import { getBaseUrl } from '../providerConfig.js'
import { getSystemPrompt, getUserPrompt } from '../prompts.js'

export const geminiAdapter = async ({ apiKey, model, businessDescription }) => {
  const url = `${getBaseUrl('gemini', model)}?key=${encodeURIComponent(apiKey)}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: getSystemPrompt() }],
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: getUserPrompt(businessDescription) }],
        },
      ],
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 1200,
        responseMimeType: 'application/json',
      },
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(
      err?.error?.message || `HTTP ${response.status}: ${response.statusText}`
    )
  }

  const data = await response.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text || ''
}
