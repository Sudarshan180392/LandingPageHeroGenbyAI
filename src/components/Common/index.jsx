export const Card = ({ children, style = {} }) => (
  <div style={{
    background: 'var(--bg-card)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: 16,
    padding: 24,
    ...style,
  }}>
    {children}
  </div>
)

export const Input = ({ label, value, onChange, placeholder, type = 'text', style = {}, inputStyle = {}, hint, ...rest }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
    {label && (
      <label style={{ fontSize: '0.82rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.01em' }}>
        {label}
      </label>
    )}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: '10px 14px',
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        outline: 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        width: '100%',
        ...inputStyle,
      }}
      onFocus={e => {
        e.target.style.borderColor = 'rgba(139,92,246,0.6)'
        e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'
      }}
      onBlur={e => {
        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
        e.target.style.boxShadow = 'none'
      }}
      {...rest}
    />
    {hint && <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{hint}</span>}
  </div>
)

export const Textarea = ({ label, value, onChange, placeholder, rows = 4, style = {}, textareaStyle = {}, ...rest }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
    {label && (
      <label style={{ fontSize: '0.82rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
        {label}
      </label>
    )}
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
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
        ...textareaStyle,
      }}
      onFocus={e => {
        e.target.style.borderColor = 'rgba(139,92,246,0.6)'
        e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'
      }}
      onBlur={e => {
        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
        e.target.style.boxShadow = 'none'
      }}
      {...rest}
    />
  </div>
)

export const Spinner = ({ size = 20, color = '#a78bfa' }) => (
  <div style={{
    width: size, height: size,
    border: `2px solid rgba(255,255,255,0.1)`,
    borderTopColor: color,
    borderRadius: '50%',
    animation: 'spin 0.7s linear infinite',
    flexShrink: 0,
  }} />
)
