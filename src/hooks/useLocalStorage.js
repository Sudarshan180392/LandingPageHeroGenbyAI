import { useState, useCallback } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback((value) => {
    try {
      const val = value instanceof Function ? value(storedValue) : value
      setStoredValue(val)
      if (val === null || val === undefined) {
        window.localStorage.removeItem(key)
      } else {
        window.localStorage.setItem(key, JSON.stringify(val))
      }
    } catch (err) {
      console.warn('localStorage error:', err)
    }
  }, [key, storedValue])

  return [storedValue, setValue]
}
