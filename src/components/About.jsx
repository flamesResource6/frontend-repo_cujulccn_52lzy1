export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
            <p className="mt-4 text-slate-300/80 leading-relaxed">
              I’m a creative developer focused on crafting immersive, human-centered web experiences. I enjoy the sweet spot where design, animation, and performance meet. I’ve built products for startups, agencies, and personal experiments — always with a playful touch.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
                <h3 className="text-white font-semibold">Focus</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300/80 list-disc list-inside">
                  <li>Interactive UI and microinteractions</li>
                  <li>3D and motion prototyping</li>
                  <li>Design systems & accessibility</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
                <h3 className="text-white font-semibold">Stack</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300/80 list-disc list-inside">
                  <li>React, Tailwind, Framer Motion</li>
                  <li>Spline, Three.js, Radix UI</li>
                  <li>FastAPI, MongoDB, Vercel</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-white font-semibold">Highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300/80">
              <li>5+ years building interfaces people love</li>
              <li>Performance-first mindset</li>
              <li>Available for freelance and collaborations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
