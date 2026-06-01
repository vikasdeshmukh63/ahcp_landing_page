import { AccentThemeProvider } from './context/AccentThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AIInterviewPanel from './components/AIInterviewPanel.jsx'
import AdaptiveAssessments from './components/AdaptiveAssessments.jsx'
import Features from './components/Features.jsx'
import Pillars from './components/Pillars.jsx'
import Lifecycle from './components/Lifecycle.jsx'
import Process from './components/Process.jsx'
import Architecture from './components/Architecture.jsx'
import Testimonials from './components/Testimonials.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import MockChatbot from './components/MockChatbot.jsx'

export default function App() {
  return (
    <AccentThemeProvider accent="saffron">
      <div className="min-h-screen overflow-x-clip bg-[var(--app-bg)] text-[var(--app-fg)]">
        <Navbar />
        <main className="pt-14 sm:pt-16">
          <Hero />
          <AIInterviewPanel />
          <AdaptiveAssessments />
          <Features />
          <Pillars />
          <Lifecycle />
          <Process />
          <Architecture />
          <Testimonials />
          <FinalCTA />
        </main>
        <Footer />
        <MockChatbot />
      </div>
    </AccentThemeProvider>
  )
}
