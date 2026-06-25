import { BrowserRouter } from 'react-router-dom'
import { GeneratorProvider } from './context/GeneratorContext.jsx'
import Header from './components/Layout/Header.jsx'
import Footer from './components/Layout/Footer.jsx'
import AppRoutes from './routes.jsx'

import './assets/styles/variables.css'
import './assets/styles/globals.css'
import './assets/styles/animations.css'

const App = () => (
  <BrowserRouter>
    <GeneratorProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </GeneratorProvider>
  </BrowserRouter>
)

export default App
