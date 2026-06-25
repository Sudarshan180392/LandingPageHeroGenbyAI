import { getAdapter } from './adapters/adapterFactory.js'
import { parseResponse } from './parseResponse.js'

export const generateCopy = async ({ providerId, apiKey, model, businessDescription }) => {
  if (!apiKey?.trim()) throw new Error('API key is required')
  if (!model?.trim()) throw new Error('Model name is required')
  if (!businessDescription?.trim()) throw new Error('Business description is required')

  const adapter = getAdapter(providerId)
  const raw = await adapter({ providerId, apiKey, model, businessDescription })

  if (!raw) throw new Error('Empty response from AI provider')

  return parseResponse(raw)
}
