import { MAX_CHARS } from '../../utils/constants.js'

const CharacterCounter = ({ count }) => {
  const pct = count / MAX_CHARS
  const color = pct > 0.9 ? '#ff4d6d' : pct > 0.75 ? '#FFCC00' : 'rgba(255,255,255,0.35)'

  return (
    <span style={{ fontSize: '0.75rem', color, fontVariantNumeric: 'tabular-nums', transition: 'color 0.2s' }}>
      {count}/{MAX_CHARS}
    </span>
  )
}

export default CharacterCounter
