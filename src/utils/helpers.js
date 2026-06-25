export const getProviderAdapter = (providerId) => {
  const map = {
    openai: 'openai',
    groq: 'openai',
    deepseek: 'openai',
    perplexity: 'openai',
    anthropic: 'anthropic',
    gemini: 'gemini',
  }
  return map[providerId] || 'openai'
}

export const truncate = (str, len = 60) =>
  str.length > len ? str.slice(0, len) + '…' : str

export const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

export const getLocalStorageKey = (providerId) => `uaicg_key_${providerId}`
