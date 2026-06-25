import { useState, useCallback } from 'react'
import { generateCopy } from '../services/api.js'

export const useGenerator = () => {
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const generate = useCallback(async (params) => {
    setLoading(true)
    setError(null)
    setResults(null)
    try {
      const data = await generateCopy(params)
      setResults(data)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please check your API key and try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setResults(null)
    setError(null)
    setLoading(false)
  }, [])

  return { results, loading, error, generate, reset }
}
