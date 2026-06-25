export const PROVIDERS = [
  { id: 'groq', label: 'Groq', adapter: 'openai', defaultModel: 'openai/gpt-oss-120b' },
  { id: 'openai', label: 'OpenAI', adapter: 'openai', defaultModel: 'gpt-4o' },
  { id: 'anthropic', label: 'Anthropic (Claude)', adapter: 'anthropic', defaultModel: 'claude-3-5-sonnet-20241022' },
  { id: 'deepseek', label: 'DeepSeek', adapter: 'openai', defaultModel: 'deepseek-chat' },
  { id: 'perplexity', label: 'Perplexity', adapter: 'openai', defaultModel: 'llama-3.1-sonar-large-128k-online' },
  { id: 'gemini', label: 'Gemini (Google)', adapter: 'gemini', defaultModel: 'gemini-1.5-flash' },
]

export const PROVIDER_BASE_URLS = {
  openai: 'https://api.openai.com/v1/chat/completions',
  groq: 'https://api.groq.com/openai/v1/chat/completions',
  deepseek: 'https://api.deepseek.com/v1/chat/completions',
  perplexity: 'https://api.perplexity.ai/chat/completions',
  anthropic: 'https://api.anthropic.com/v1/messages',
  gemini: 'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent',
}

export const COPY_STYLES = [
  {
    key: 'bold',
    label: 'Bold',
    accent: '#ff4d6d',
    bg: 'rgba(255, 77, 109, 0.08)',
    border: 'rgba(255, 77, 109, 0.25)',
    emoji: '🔥',
  },
  {
    key: 'minimalist',
    label: 'Minimalist',
    accent: '#009B4D',
    bg: 'rgba(0, 155, 77, 0.08)',
    border: 'rgba(0, 155, 77, 0.25)',
    emoji: '◻️',
  },
  {
    key: 'professional',
    label: 'Professional',
    accent: '#FAF5E9',
    bg: 'rgba(250, 245, 233, 0.06)',
    border: 'rgba(250, 245, 233, 0.2)',
    emoji: '💼',
  },
  {
    key: 'playful',
    label: 'Playful',
    accent: '#FFCC00',
    bg: 'rgba(255, 204, 0, 0.08)',
    border: 'rgba(255, 204, 0, 0.25)',
    emoji: '🎉',
  },
]

export const EXAMPLE_BUSINESSES = [
  'A productivity app for remote teams that replaces messy email threads with async video updates',
  'An AI-powered legal document reviewer that helps small businesses avoid costly contract mistakes',
  'A sustainable meal kit service that sources ingredients from local farms within 50 miles',
  'A mental wellness platform with guided micro-meditations for busy professionals',
  'A no-code website builder designed specifically for freelance photographers',
  'An online tutoring marketplace connecting college students with expert professors',
  'A subscription box for indie board games with curated monthly picks',
  'A fintech app that automates savings by rounding up purchases and investing the difference',
]

export const SYSTEM_PROMPT = `You are a SaaS copywriter. Return ONLY valid JSON with four keys: bold, minimalist, professional, playful — each containing headline, subheadline, and cta strings. No markdown, no backticks, no extra text.`

export const MAX_CHARS = 500
