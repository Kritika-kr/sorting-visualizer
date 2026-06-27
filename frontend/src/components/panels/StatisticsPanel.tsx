import { Activity, Clock, Cpu, GitFork, Repeat2, Replace, Eye, Edit3, Award } from 'lucide-react';
import { AlgorithmStats } from '../../types/algorithm';

interface StatisticsPanelProps {
  stats: AlgorithmStats;
  progressPercent?: number; // Optional custom progress percentage
}

export const StatisticsPanel = ({ stats, progressPercent }: StatisticsPanelProps) => {
  const finalProgress = progressPercent !== undefined ? progressPercent : 0;
  
  const items = [
    { label: 'Comparisons', value: stats.comparisons, Icon: Activity, color: 'text-cyan-400' },
    { label: 'Swaps', value: stats.swaps, Icon: Replace, color: 'text-pink-400' },
    { label: 'Reads (Accesses)', value: stats.reads ?? 0, Icon: Eye, color: 'text-sky-400' },
    { label: 'Writes (Mutations)', value: stats.writes ?? 0, Icon: Edit3, color: 'text-amber-400' },
    { label: 'Visited Nodes', value: stats.visitedNodes, Icon: Repeat2, color: 'text-indigo-400' },
    { label: 'Recursion Depth', value: stats.recursionDepth > 0 ? stats.recursionDepth : '-', Icon: GitFork, color: 'text-purple-400' },
    { label: 'Execution Time', value: `${stats.executionTimeMs} ms`, Icon: Clock, color: 'text-emerald-400' },
    { label: 'Est. Memory', value: `${Math.round(stats.memoryBytes / 1024 * 10) / 10} KB`, Icon: Cpu, color: 'text-teal-400' }
  ];

  return (
    <section className="glass-panel border border-white/10 bg-slate-950/70 p-4 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <h2 className="panel-title flex items-center gap-2">
          <Award size={18} className="text-cyan-300" />
          Live Metrics
        </h2>
        {progressPercent !== undefined && (
          <span className="rounded bg-cyan-300/10 px-2 py-0.5 text-xs font-semibold text-cyan-200">
            {finalProgress}% Progress
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map(({ label, value, Icon, color }) => (
          <div 
            key={label} 
            className="group relative overflow-hidden rounded-lg border border-white/5 bg-slate-900/40 p-3.5 transition-all hover:border-white/10 hover:bg-slate-900/60"
          >
            {/* Subtle hovering light */}
            <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-cyan-400/5 blur-xl group-hover:bg-cyan-400/10 transition-all duration-300" />

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Icon size={14} className={color} />
              {label}
            </div>
            <div className="mt-2 text-xl font-bold tracking-tight text-white transition-all duration-200 group-hover:scale-102">
              {value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
