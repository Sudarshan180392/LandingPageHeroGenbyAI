import { MAX_CHARS } from '../../utils/constants.js'
import CharacterCounter from './CharacterCounter.jsx'

const BusinessTextarea = ({ value, onChange }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <label style={{ fontSize: '0.82rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
        Business Description
      </label>
      <CharacterCounter count={value.length} />
    </div>
    <textarea
      value={value}
      onChange={e => onChange(e.target.value.slice(0, MAX_CHARS))}
      placeholder="Describe your product or service in a few sentences. What does it do? Who is it for? What's the key benefit?"
      rows={4}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '12px 14px',
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        outline: 'none',
        resize: 'vertical',
        lineHeight: 1.6,
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        width: '100%',
        minHeight: 100,
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
  </div>
)

export default BusinessTextarea
