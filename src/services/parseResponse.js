import { safeParseJson, validateCopyJson } from '../utils/validateJson.js'

export const parseResponse = (raw) => {
  const parsed = safeParseJson(raw)
  validateCopyJson(parsed)
  return parsed
}
