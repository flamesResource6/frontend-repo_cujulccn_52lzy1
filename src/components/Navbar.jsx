import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-md transition"
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 shadow-lg" />
            <span className="text-white font-semibold tracking-tight group-hover:text-sky-100 transition">My Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#about" label="About" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-sky-500 to-violet-500 text-white text-sm font-medium shadow hover:brightness-110 transition">
              <Mail size={16} />
              <span>Get in touch</span>
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-white/5 text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#about" label="About" />
              <NavLink href="#contact" label="Contact" />
              <div className="flex items-center gap-2 pt-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200 hover:text-white transition">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
