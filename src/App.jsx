import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Technology from './components/Technology'
import Privacy from './components/Privacy'
import UseCases from './components/UseCases'
import Comparison from './components/Comparison'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Hero />
      <Features />
      <HowItWorks />
      <Technology />
      <Privacy />
      <UseCases />
      <Comparison />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
