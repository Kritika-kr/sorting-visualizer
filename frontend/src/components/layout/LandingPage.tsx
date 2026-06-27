import { motion } from 'framer-motion';
import { ArrowRight, Code2, Gauge, Layers3, PlayCircle } from 'lucide-react';
import { AlgorithmCategory } from '../../types/algorithm';
import { categories } from '../../data/algorithms';

interface LandingPageProps {
  onStart: () => void;
  onCompare: () => void;
  onCategory: (category: AlgorithmCategory) => void;
}

export const LandingPage = ({ onStart, onCompare, onCategory }: LandingPageProps) => (
  <main className="overflow-y-auto">
    <section className="relative min-h-[76vh] px-5 py-10 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(251,113,133,0.14),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-4 inline-flex rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
            Full-stack algorithm visualization platform
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
            Algorithm Studio
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Learn algorithms through backend-generated execution traces, synchronized code highlighting, professional controls, and interactive data-structure workspaces.
          </p>
          <button onClick={onStart} className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
            <PlayCircle size={18} />
            Start Learning
            <ArrowRight size={16} />
          </button>
          <button onClick={onCompare} className="ml-3 mt-8 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Compare
            <ArrowRight size={16} />
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="glass-panel p-4">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-sm font-medium text-white">Execution Timeline</span>
            <span className="text-xs text-cyan-200">REST steps</span>
          </div>
          <div className="space-y-3">
            {['compare(2, 3)', 'swap(2, 3)', 'pivot(7)', 'visit(Node E)', 'relax(A, B)'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-3">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 text-xs text-cyan-100">{index + 1}</span>
                <code className="text-sm text-slate-200">{item}</code>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 pb-12 md:px-10">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Backend Traces', 'C++20 services return animation steps, stats, and active code lines.', Code2],
          ['Studio Controls', 'Pause, resume, step, reset, fullscreen, screenshots, and favorites.', Gauge],
          ['Multiple Domains', 'Sorting, searching, linked lists, stacks, queues, trees, graphs, and DP.', Layers3]
        ].map(([title, body, Icon]) => {
          const CardIcon = Icon as typeof Code2;
          return (
            <div key={title as string} className="glass-panel p-5">
              <CardIcon className="mb-5 text-cyan-200" size={24} />
              <h3 className="text-base font-semibold text-white">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{body as string}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <button key={category} onClick={() => onCategory(category)} className="rounded-md border border-white/10 bg-white/5 px-4 py-4 text-left text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
            {category}
          </button>
        ))}
      </div>
    </section>
  </main>
);
