const CTAButtonPreview = ({ text, accent }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '9px 20px',
    borderRadius: 8,
    background: accent,
    color: accent === '#FAF5E9' ? '#1a1a2e' : '#fff',
    fontWeight: 700,
    fontSize: '0.85rem',
    fontFamily: 'var(--font-display)',
    letterSpacing: '0.01em',
    cursor: 'default',
    userSelect: 'none',
    maxWidth: '100%',
    wordBreak: 'break-word',
    textAlign: 'center',
  }}>
    {text}
  </div>
)

export default CTAButtonPreview
