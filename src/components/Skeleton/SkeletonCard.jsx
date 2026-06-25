export const SkeletonCard = ({ accent }) => (
  <div style={{
    background: 'var(--bg-card)',
    border: `1px solid ${accent ? `${accent}33` : 'rgba(255,255,255,0.07)'}`,
    borderRadius: 16,
    padding: 24,
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Shimmer overlay */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite linear',
    }} />

    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
      <div style={{ height: 16, width: 80, borderRadius: 6, background: 'rgba(255,255,255,0.07)' }} />
      <div style={{ height: 26, width: 60, borderRadius: 6, background: 'rgba(255,255,255,0.05)' }} />
    </div>

    <div style={{ marginBottom: 10, height: 24, width: '85%', borderRadius: 6, background: 'rgba(255,255,255,0.09)' }} />
    <div style={{ height: 24, width: '60%', borderRadius: 6, background: 'rgba(255,255,255,0.06)', marginBottom: 16 }} />

    <div style={{ marginBottom: 6, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }} />
    <div style={{ height: 14, width: '80%', borderRadius: 4, background: 'rgba(255,255,255,0.04)', marginBottom: 24 }} />

    <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 16 }} />

    <div style={{ height: 14, width: 100, borderRadius: 4, background: 'rgba(255,255,255,0.04)', marginBottom: 10 }} />
    <div style={{ height: 38, width: 140, borderRadius: 8, background: 'rgba(255,255,255,0.07)' }} />
  </div>
)

const SKELETON_ACCENTS = ['#ff4d6d', '#009B4D', '#FAF5E9', '#FFCC00']

export const SkeletonGrid = () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
      <div style={{ height: 22, width: 140, borderRadius: 6, background: 'rgba(255,255,255,0.07)' }} />
      <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.07)' }} />
      <div style={{ height: 16, width: 50, borderRadius: 4, background: 'rgba(255,255,255,0.05)' }} />
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 16,
    }}>
      {SKELETON_ACCENTS.map((accent, i) => (
        <SkeletonCard key={i} accent={accent} />
      ))}
    </div>
  </div>
)
