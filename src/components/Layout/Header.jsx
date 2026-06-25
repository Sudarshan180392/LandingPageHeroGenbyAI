import Container from './Container.jsx'

const Header = () => (
  <header style={{
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    padding: '20px 0',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: 'rgba(10,10,15,0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  }}>
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, flexShrink: 0,
        }}>✦</div>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.2,
          }}>Universal AI Copy Generator</div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
            6 providers · 4 copy styles · zero lock-in
          </div>
        </div>
      </div>

      <a
        href="https://console.groq.com/keys"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.5)',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          padding: '6px 12px',
          transition: 'all 0.2s ease',
          display: 'flex', alignItems: 'center', gap: 6,
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
          e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
          e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
        }}
      >
        <span>⚡</span> Free Groq Key
      </a>
    </Container>
  </header>
)

export default Header
