import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const mockProjects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful 3D hero built with Spline and React for a tech startup.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Chat UI',
    description: 'Responsive chat interface with presence indicators and emoji picker.',
    tags: ['React', 'WebSocket', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Portfolio CMS',
    description: 'Simple content system to manage projects, skills, and blog posts.',
    tags: ['FastAPI', 'MongoDB', 'Shadcn'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Placeholder for future backend fetch
    setProjects(mockProjects);
  }, []);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <p className="mt-3 text-slate-300/80">A selection of work that balances technical craft with playful interactions.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur hover:border-white/20 transition">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-sky-500/10 to-violet-500/10 transition" />
              <h3 className="relative z-10 text-white font-semibold">{p.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-slate-300/80">{p.description}</p>
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-200">{t}</span>
                ))}
              </div>
              <div className="relative z-10 mt-6 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sky-300 hover:text-sky-200 text-sm">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-200 text-sm">
                  <Github size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
