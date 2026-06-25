import Container from './Container.jsx'

const Footer = () => (
  <footer style={{
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '24px 0',
    marginTop: 'auto',
  }}>
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'rgba(255,255,255,0.3)',
      fontSize: '0.8rem',
    }}>
      <span>🔒 Your API keys are saved only in your browser</span>
      <span style={{ opacity: 0.4 }}>·</span>
      <span>Designed & developed by <a href='https://www.linkedin.com/in/sudarshan-mishra/' target='_blank'>Sudarshan Mishra</a></span>
      
    </Container>
  </footer>
)

export default Footer
