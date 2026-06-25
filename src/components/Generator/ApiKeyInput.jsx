import { useState } from 'react'
import { Input } from '../Common/index.jsx'

const ApiKeyInput = ({ value, onChange, provider }) => {
  const [show, setShow] = useState(false)

  const placeholders = {
    groq: 'gsk_...',
    openai: 'sk-...',
    anthropic: 'sk-ant-...',
    deepseek: 'sk-...',
    perplexity: 'pplx-...',
    gemini: 'AIza...',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '0.82rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
          API Key
        </label>
        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>
          🔒 Saved in browser only
        </span>
      </div>
      <div style={{ position: 'relative' }}>
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholders[provider?.id] || 'Paste your API key…'}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            padding: '10px 44px 10px 14px',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            outline: 'none',
            fontFamily: value ? 'var(--font-mono)' : 'var(--font-body)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
          onFocus={e => {
            e.target.style.borderColor = 'rgba(139,92,246,0.6)'
            e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'
          }}
          onBlur={e => {
            e.target.style.borderColor = 'rgba(255,255,255,0.1)'
            e.target.style.boxShadow = 'none'
          }}
        />
        <button
          onClick={() => setShow(s => !s)}
          style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer', fontSize: 16, padding: '2px 4px',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
          title={show ? 'Hide key' : 'Show key'}
        >
          {show ? '🙈' : '👁'}
        </button>
      </div>
    </div>
  )
}

export default ApiKeyInput
