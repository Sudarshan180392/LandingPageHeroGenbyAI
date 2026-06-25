import { EXAMPLE_BUSINESSES } from '../../utils/constants.js'

const ExamplePills = ({ onSelect }) => (
  <div>
    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
      Try an example →
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {EXAMPLE_BUSINESSES.map((ex, i) => {
        const short = ex.split(' ').slice(0, 5).join(' ') + '…'
        return (
          <button
            key={i}
            onClick={() => onSelect(ex)}
            title={ex}
            style={{
              background: 'rgba(124, 58, 237, 0.1)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              borderRadius: 20,
              padding: '5px 12px',
              fontSize: '0.78rem',
              color: 'rgba(167, 139, 250, 0.85)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(124, 58, 237, 0.2)'
              e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.4)'
              e.currentTarget.style.color = '#a78bfa'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(124, 58, 237, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'
              e.currentTarget.style.color = 'rgba(167, 139, 250, 0.85)'
            }}
          >
            {short}
          </button>
        )
      })}
    </div>
  </div>
)

export default ExamplePills
