import { useState, useCallback } from 'react'
import { copyToClipboard } from '../utils/copyToClipboard.js'

export const useCopyClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text) => {
    const ok = await copyToClipboard(text)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), timeout)
    }
    return ok
  }, [timeout])

  return [copied, copy]
}
