import { Spinner } from '../Common/index.jsx'

export const GenerateButton = ({ onClick, loading, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      width: '100%', padding: '14px 24px',
      background: disabled || loading
        ? 'rgba(124, 58, 237, 0.3)'
        : 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
      border: 'none', borderRadius: 12,
      color: '#fff', fontSize: '1rem', fontWeight: 700,
      fontFamily: 'var(--font-display)',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      transition: 'all 0.25s ease',
      boxShadow: disabled || loading ? 'none' : '0 4px 24px rgba(124, 58, 237, 0.35)',
      letterSpacing: '0.01em',
    }}
    onMouseEnter={e => {
      if (!disabled && !loading) {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(124, 58, 237, 0.5)'
      }
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = disabled || loading ? 'none' : '0 4px 24px rgba(124, 58, 237, 0.35)'
    }}
  >
    {loading ? (
      <>
        <Spinner size={18} color="#fff" />
        <span>Generating copy…</span>
      </>
    ) : (
      <>
        <span style={{ fontSize: 18 }}>✦</span>
        <span>Generate Copy</span>
      </>
    )}
  </button>
)

export const ResetButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
      width: '100%', padding: '10px 16px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: 10, color: 'rgba(255,255,255,0.5)',
      fontSize: '0.88rem', fontWeight: 500,
      cursor: 'pointer', transition: 'all 0.2s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = 'rgba(255,77,109,0.1)'
      e.currentTarget.style.borderColor = 'rgba(255,77,109,0.25)'
      e.currentTarget.style.color = '#ff4d6d'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
      e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
    }}
  >
    ↺ Reset
  </button>
)
