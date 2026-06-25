import { useGeneratorContext } from '../context/GeneratorContext.jsx'
import Container from '../components/Layout/Container.jsx'
import ProviderDropdown from '../components/Generator/ProviderDropdown.jsx'
import ApiKeyInput from '../components/Generator/ApiKeyInput.jsx'
import ModelInput from '../components/Generator/ModelInput.jsx'
import BusinessTextarea from '../components/Generator/BusinessTextarea.jsx'
import ExamplePills from '../components/Generator/ExamplePills.jsx'
import { GenerateButton, ResetButton } from '../components/Generator/GenerateButton.jsx'
import RecommendationBanner from '../components/Generator/RecommendationBanner.jsx'
import ResultsGrid from '../components/Results/ResultsGrid.jsx'
import { SkeletonGrid } from '../components/Skeleton/SkeletonCard.jsx'

const Home = () => {
  const {
    provider, setProvider,
    model, setModel,
    apiKey, setApiKey,
    business, setBusiness,
    results, loading, error,
    handleGenerate, handleReset,
  } = useGeneratorContext()

  const canGenerate = apiKey.trim() && model.trim() && business.trim() && !loading

  return (
    <main style={{ padding: '40px 0 60px' }}>
      <Container>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(124, 58, 237, 0.12)',
            border: '1px solid rgba(124, 58, 237, 0.25)',
            borderRadius: 20, padding: '5px 14px', marginBottom: 20,
            fontSize: '0.78rem', color: '#a78bfa', fontWeight: 500,
          }}>
            ✦ Powered by your API key · 6 providers supported
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 16,
            background: 'linear-gradient(135deg, #fff 30%, rgba(167,139,250,0.9) 70%, rgba(96,165,250,0.9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            4 Copy Styles.<br />One Prompt. Any AI.
          </h1>

          <p style={{
            fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)',
            maxWidth: 520, margin: '0 auto', lineHeight: 1.7,
          }}>
            Generate bold, minimalist, professional, and playful marketing copy
            for your product using any AI provider — with your own key.
          </p>
        </div>

        {/* Main layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 380px) 1fr',
          gap: 32,
          alignItems: 'start',
        }}
          className="home-grid"
        >

          {/* LEFT: Form panel */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            position: 'sticky',
            top: 90,
          }}>
            <div style={{
              fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
              paddingBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              Configuration
            </div>

            <ProviderDropdown value={provider} onChange={setProvider} />
            <ApiKeyInput value={apiKey} onChange={setApiKey} provider={provider} />
            <ModelInput value={model} onChange={setModel} provider={provider} />

            <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

            <BusinessTextarea value={business} onChange={setBusiness} />
            <ExamplePills onSelect={setBusiness} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
              <GenerateButton onClick={handleGenerate} loading={loading} disabled={!canGenerate} />
              {(results || error) && <ResetButton onClick={handleReset} />}
            </div>

            <RecommendationBanner />
          </div>

          {/* RIGHT: Results panel */}
          <div style={{ minWidth: 0 }}>
            {loading && <SkeletonGrid />}

            {error && !loading && (
              <div style={{
                background: 'rgba(255, 77, 109, 0.08)',
                border: '1px solid rgba(255, 77, 109, 0.25)',
                borderRadius: 16, padding: 24,
                animation: 'fadeIn 0.3s ease',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>⚠</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#ff4d6d', marginBottom: 8, fontSize: '0.95rem' }}>
                      Generation failed
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                      {error}
                    </div>
                    <div style={{ marginTop: 12, fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
                      Double-check your API key and model name, then try again.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {results && !loading && <ResultsGrid results={results} />}

            {!loading && !results && !error && (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', minHeight: 400, gap: 16,
                color: 'rgba(255,255,255,0.2)', textAlign: 'center',
              }}>
                <div style={{ fontSize: 56 }}>✦</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600 }}>
                  Your copy will appear here
                </div>
                <div style={{ fontSize: '0.85rem', maxWidth: 280, lineHeight: 1.6 }}>
                  Fill in your provider config, describe your business, and hit Generate.
                </div>
              </div>
            )}
          </div>
        </div>

      </Container>

      <style>{`
        @media (max-width: 768px) {
          .home-grid {
            grid-template-columns: 1fr !important;
          }
          .home-grid > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </main>
  )
}

export default Home
