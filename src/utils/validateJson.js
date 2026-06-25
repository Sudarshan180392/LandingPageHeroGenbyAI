export const validateCopyJson = (obj) => {
  const required = ['bold', 'minimalist', 'professional', 'playful']
  const fields = ['headline', 'subheadline', 'cta']

  for (const style of required) {
    if (!obj[style]) throw new Error(`Missing "${style}" key in response`)
    for (const field of fields) {
      if (typeof obj[style][field] !== 'string') {
        throw new Error(`Missing "${field}" in "${style}"`)
      }
    }
  }
  return true
}

export const safeParseJson = (raw) => {
  // Strip markdown fences if present
  let cleaned = raw.trim()
  cleaned = cleaned.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim()
  cleaned = cleaned.replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim()

  // Find JSON object in the string
  const start = cleaned.indexOf('{')
  const end = cleaned.lastIndexOf('}')
  if (start !== -1 && end !== -1) {
    cleaned = cleaned.slice(start, end + 1)
  }

  return JSON.parse(cleaned)
}
