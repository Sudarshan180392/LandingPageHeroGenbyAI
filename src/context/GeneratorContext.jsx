import { createContext, useContext, useState, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { useGenerator } from '../hooks/useGenerator.js'
import { PROVIDERS } from '../utils/constants.js'
import { getLocalStorageKey } from '../utils/helpers.js'

const GeneratorContext = createContext(null)

export const GeneratorProvider = ({ children }) => {
  const [provider, setProvider] = useState(PROVIDERS[0])
  const [model, setModel] = useState(PROVIDERS[0].defaultModel)
  const [business, setBusiness] = useState('')

  // Per-provider API key persistence
  const [apiKeys, setApiKeys] = useLocalStorage('uaicg_api_keys', {})

  const apiKey = apiKeys[provider.id] || ''

  const setApiKey = useCallback((key) => {
    setApiKeys((prev) => ({ ...prev, [provider.id]: key }))
  }, [provider.id, setApiKeys])

  const handleProviderChange = useCallback((newProvider) => {
    setProvider(newProvider)
    setModel(newProvider.defaultModel)
  }, [])

  const { results, loading, error, generate, reset } = useGenerator()

  const handleGenerate = useCallback(() => {
    generate({
      providerId: provider.id,
      apiKey,
      model,
      businessDescription: business,
    })
  }, [provider.id, apiKey, model, business, generate])

  const handleReset = useCallback(() => {
    reset()
    setBusiness('')
  }, [reset])

  return (
    <GeneratorContext.Provider value={{
      provider, setProvider: handleProviderChange,
      model, setModel,
      apiKey, setApiKey,
      business, setBusiness,
      results, loading, error,
      handleGenerate, handleReset,
    }}>
      {children}
    </GeneratorContext.Provider>
  )
}

export const useGeneratorContext = () => {
  const ctx = useContext(GeneratorContext)
  if (!ctx) throw new Error('useGeneratorContext must be used within GeneratorProvider')
  return ctx
}
