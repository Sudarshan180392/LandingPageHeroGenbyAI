const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  style = {},
  ...rest
}) => {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-body)', fontWeight: 600,
    borderRadius: 10, transition: 'all 0.2s ease',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.5 : 1,
    ...(size === 'sm' ? { padding: '8px 14px', fontSize: '0.82rem' } :
        size === 'lg' ? { padding: '14px 28px', fontSize: '1rem' } :
        { padding: '11px 20px', fontSize: '0.9rem' }),
  }

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
    },
    secondary: {
      background: 'rgba(255,255,255,0.07)',
      color: 'rgba(255,255,255,0.85)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    ghost: {
      background: 'transparent',
      color: 'rgba(255,255,255,0.6)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    danger: {
      background: 'rgba(255,77,109,0.12)',
      color: '#ff4d6d',
      border: '1px solid rgba(255,77,109,0.25)',
    },
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={e => {
        if (!disabled) {
          if (variant === 'primary') {
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(124, 58, 237, 0.45)'
          } else {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
          }
        }
      }}
      onMouseLeave={e => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.3)'
        } else {
          e.currentTarget.style.background = variants[variant].background
        }
      }}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
