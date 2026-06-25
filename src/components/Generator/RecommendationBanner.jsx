const RecommendationBanner = () => (
  <div style={{
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
    border: '1px solid rgba(124, 58, 237, 0.2)',
    borderRadius: 12,
    padding: '14px 18px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
  }}>
    <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>⚡</span>
    <div>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>
        No API key? Try Groq — it's free & blazing fast
      </div>
      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
        Get your free key at{' '}
        <a
          href="https://console.groq.com/keys"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#a78bfa',
            fontWeight: 600,
            textDecoration: 'underline',
            textDecorationColor: 'rgba(167,139,250,0.4)',
          }}
        >
          console.groq.com/keys
        </a>
        {' '}— lightning fast and free. Your key is saved in your browser only.
      </div>
    </div>
  </div>
)

export default RecommendationBanner
