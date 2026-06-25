import { useCopyClipboard } from '../../hooks/useCopyClipboard.js'

const CopyButton = ({ text }) => {
  const [copied, copy] = useCopyClipboard()

  return (
    <button
      onClick={() => copy(text)}
      style={{
        display: 'flex', alignItems: 'center', gap: 5,
        background: copied ? 'rgba(0, 155, 77, 0.15)' : 'rgba(255,255,255,0.06)',
        border: `1px solid ${copied ? 'rgba(0,155,77,0.3)' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: 7, padding: '5px 10px',
        color: copied ? '#009B4D' : 'rgba(255,255,255,0.5)',
        fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer',
        transition: 'all 0.2s ease', flexShrink: 0,
      }}
      onMouseEnter={e => {
        if (!copied) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
          e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
        }
      }}
      onMouseLeave={e => {
        if (!copied) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
          e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
        }
      }}
    >
      {copied ? '✓ Copied' : '⎘ Copy'}
    </button>
  )
}

export default CopyButton
