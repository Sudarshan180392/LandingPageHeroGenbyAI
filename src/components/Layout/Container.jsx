const Container = ({ children, style, className = '' }) => (
  <div
    className={className}
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      width: '100%',
      ...style,
    }}
  >
    {children}
  </div>
)

export default Container
