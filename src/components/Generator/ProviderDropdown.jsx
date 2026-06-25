import { getAllProviders } from '../../services/providerConfig.js'

const PROVIDER_ICONS = {
  groq: '⚡',
  openai: '◉',
  anthropic: '✦',
  deepseek: '◈',
  perplexity: '◎',
  gemini: '✧',
}

const ProviderDropdown = ({ value, onChange }) => {
  const providers = getAllProviders()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: '0.82rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
        AI Provider
      </label>
      <div style={{ position: 'relative' }}>
        <select
          value={value.id}
          onChange={e => onChange(providers.find(p => p.id === e.target.value))}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            padding: '10px 40px 10px 14px',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            outline: 'none',
            appearance: 'none',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={e => {
            e.target.style.borderColor = 'rgba(139,92,246,0.6)'
            e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'
          }}
          onBlur={e => {
            e.target.style.borderColor = 'rgba(255,255,255,0.1)'
            e.target.style.boxShadow = 'none'
          }}
        >
          {providers.map(p => (
            <option key={p.id} value={p.id} style={{ background: '#13131a', color: '#fff' }}>
              {PROVIDER_ICONS[p.id]} {p.label}
            </option>
          ))}
        </select>
        <div style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 12,
        }}>▾</div>
      </div>
    </div>
  )
}

export default ProviderDropdown
