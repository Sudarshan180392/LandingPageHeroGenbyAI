import CTAButtonPreview from './CTAButtonPreview.jsx'
import CopyButton from './CopyButton.jsx'

const ResultCard = ({ styleConfig, data, index }) => {
  const { label, accent, bg, border, emoji } = styleConfig
  const { headline, subheadline, cta } = data

  const fullText = `${headline}\n\n${subheadline}\n\n${cta}`

  return (
    <div
      className={`animate-fadeIn animate-card-${index + 1}`}
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 16,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow top edge */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
        opacity: 0.8,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 14 }}>{emoji}</span>
          <span style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: accent, opacity: 0.9,
          }}>
            {label}
          </span>
        </div>
        <CopyButton text={fullText} />
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.95)',
          lineHeight: 1.3,
          marginBottom: 10,
        }}>
          {headline}
        </h3>
        <p style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.6,
        }}>
          {subheadline}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: `rgba(255,255,255,0.06)` }} />

      {/* CTA Preview */}
      <div>
        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>
          CTA Button Preview
        </div>
        <CTAButtonPreview text={cta} accent={accent} />
      </div>
    </div>
  )
}

export default ResultCard
