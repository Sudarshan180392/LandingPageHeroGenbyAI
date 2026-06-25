import ResultCard from './ResultCard.jsx'
import { COPY_STYLES } from '../../utils/constants.js'

const ResultsGrid = ({ results }) => (
  <div>
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700,
        color: 'rgba(255,255,255,0.9)',
      }}>
        Generated Copy
      </div>
      <div style={{
        height: 1, flex: 1, background: 'rgba(255,255,255,0.07)',
      }} />
      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
        4 styles
      </span>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 16,
    }}>
      {COPY_STYLES.map((styleConfig, i) => {
        const data = results[styleConfig.key]
        if (!data) return null
        return (
          <ResultCard
            key={styleConfig.key}
            styleConfig={styleConfig}
            data={data}
            index={i}
          />
        )
      })}
    </div>
  </div>
)

export default ResultsGrid
