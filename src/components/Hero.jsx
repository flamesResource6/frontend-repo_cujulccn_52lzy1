import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs text-sky-200/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Crafting modern, playful web experiences
          </h1>
          <p className="mt-4 text-slate-200/80 text-lg">
            I design and build interactive products that feel fast, delightful, and human. Let’s turn ideas into something you can touch.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-slate-100 font-semibold hover:bg-slate-900/80 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(800px_circle_at_100%_30%,rgba(139,92,246,0.15),transparent_40%)]" />
    </section>
  );
}
