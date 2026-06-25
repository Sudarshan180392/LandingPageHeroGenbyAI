import { SYSTEM_PROMPT } from '../utils/constants.js'

export const getSystemPrompt = () => SYSTEM_PROMPT

export const getUserPrompt = (businessDescription) =>
  `Generate four distinct copy styles for this business: "${businessDescription}"\n\nReturn ONLY the JSON object.`
