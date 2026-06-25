import { PROVIDERS, PROVIDER_BASE_URLS } from '../utils/constants.js'

export const getProviderConfig = (providerId) =>
  PROVIDERS.find((p) => p.id === providerId)

export const getBaseUrl = (providerId, model) => {
  const url = PROVIDER_BASE_URLS[providerId]
  if (!url) throw new Error(`Unknown provider: ${providerId}`)
  return url.replace('{model}', encodeURIComponent(model))
}

export const getAllProviders = () => PROVIDERS
