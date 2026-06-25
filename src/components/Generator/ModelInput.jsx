import { Input } from '../Common/index.jsx'

const MODEL_HINTS = {
  groq: 'e.g. openai/gpt-oss-120b, qwen/qwen3.6-27b',
  openai: 'e.g. gpt-4o, gpt-4o-mini, gpt-3.5-turbo',
  anthropic: 'e.g. claude-3-5-sonnet-20241022, claude-3-haiku-20240307',
  deepseek: 'e.g. deepseek-chat, deepseek-coder',
  perplexity: 'e.g. llama-3.1-sonar-large-128k-online',
  gemini: 'e.g. gemini-1.5-flash, gemini-1.5-pro',
}

const ModelInput = ({ value, onChange, provider }) => (
  <Input
    label="Model"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={MODEL_HINTS[provider?.id] || 'Enter model name…'}
    hint={MODEL_HINTS[provider?.id]}
  />
)

export default ModelInput
