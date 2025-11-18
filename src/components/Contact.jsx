import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 text-white">
              <Mail size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Let’s build together</h2>
          </div>
          <p className="mt-2 text-slate-300/80">Tell me about your idea and I’ll get back to you.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input required placeholder="Your name" className="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50" />
            <input type="email" required placeholder="Email address" className="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50" />
            <textarea required placeholder="Project details" rows="5" className="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50" />
            <button type="submit" className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold shadow hover:brightness-110 transition">
              <Send size={16} /> Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-emerald-300/90 text-sm">{status}</p>}
        </div>
      </div>
    </section>
  );
}
