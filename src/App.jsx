import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Global subtle background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(1000px_circle_at_90%_20%,rgba(139,92,246,0.12),transparent_45%),radial-gradient(900px_circle_at_50%_100%,rgba(59,130,246,0.08),transparent_45%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="text-sm text-slate-400">Built with care • Tech • Portfolio • Modern • Playful</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
