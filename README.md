# Universal AI Copy Generator

Generate **bold, minimalist, professional, and playful** marketing copy for any product using your choice of AI provider — with your own API key.

## Features

- **6 AI providers**: Groq, OpenAI, Anthropic (Claude), DeepSeek, Perplexity, Gemini
- **4 copy styles**: Bold 🔥, Minimalist ◻️, Professional 💼, Playful 🎉
- **Per-provider key storage** in localStorage (never sent to any server)
- Shimmer skeleton loading states
- Example business pills for quick testing
- Character counter on business description
- Copy-to-clipboard on each card
- Fully responsive (mobile stacked, desktop side-by-side)

## Quick Start

```bash
npm install
npm run dev
```

## Getting a Free API Key

Don't have an API key? **Groq is free and lightning fast:**
→ [console.groq.com/keys](https://console.groq.com/keys)

## Provider Setup

| Provider | Model Example | Where to get key |
|---|---|---|
| Groq | `openai/gpt-oss-120b` | [console.groq.com/keys](https://console.groq.com/keys) |
| OpenAI | `gpt-4o` | [platform.openai.com](https://platform.openai.com) |
| Anthropic | `claude-3-5-sonnet-20241022` | [console.anthropic.com](https://console.anthropic.com) |
| DeepSeek | `deepseek-chat` | [platform.deepseek.com](https://platform.deepseek.com) |
| Perplexity | `llama-3.1-sonar-large-128k-online` | [perplexity.ai/settings/api](https://perplexity.ai/settings/api) |
| Gemini | `gemini-1.5-flash` | [aistudio.google.com](https://aistudio.google.com) |

## Architecture

```
src/
├── services/adapters/    # 3 adapters: OpenAI-compat, Anthropic, Gemini
├── components/           # Generator form, Results cards, Skeleton states
├── hooks/                # useGenerator, useLocalStorage, useCopyClipboard
├── context/              # GeneratorContext — shared state
└── utils/                # Constants, JSON validation, clipboard
```

## Security

API keys are stored only in your browser's `localStorage` . They are never transmitted to any server other than the AI provider you select.
