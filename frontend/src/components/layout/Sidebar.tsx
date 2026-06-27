import { motion } from 'framer-motion';
import { BarChart3, Binary, Braces, GitBranch, GitCompareArrows, Home, Layers3, ListTree, Network, Search, SquareStack, type LucideIcon } from 'lucide-react';
import { AlgorithmCategory } from '../../types/algorithm';
import { categories } from '../../data/algorithms';

type SidebarItem = AlgorithmCategory | 'Home' | 'Compare';

const icons: Record<SidebarItem, LucideIcon> = {
  Home,
  Compare: GitCompareArrows,
  Sorting: BarChart3,
  Searching: Search,
  'Linked List': ListTree,
  Stack: SquareStack,
  Queue: Layers3,
  Trees: GitBranch,
  Graphs: Network,
  'Dynamic Programming': Braces
};

interface SidebarProps {
  selected: SidebarItem;
  onSelect: (category: SidebarItem) => void;
}

export const Sidebar = ({ selected, onSelect }: SidebarProps) => (
  <aside className="hidden border-r border-white/10 bg-slate-950/70 px-3 py-4 backdrop-blur-2xl lg:flex lg:w-64 lg:flex-col">
    <div className="mb-8 flex items-center gap-3 px-2">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/15 text-cyan-300">
        <Binary size={22} />
      </div>
      <div>
        <div className="text-sm font-semibold tracking-wide text-white">Algorithm Studio</div>
        <div className="text-xs text-slate-400">Visual execution lab</div>
      </div>
    </div>

    <nav className="space-y-1">
      {(['Home', 'Compare', ...categories] as SidebarItem[]).map((item) => {
        const Icon = icons[item];
        const active = selected === item;
        return (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className="relative flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
          >
            {active && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-md bg-white/10" />}
            <span className="relative text-cyan-200"><Icon size={18} /></span>
            <span className="relative">{item}</span>
          </button>
        );
      })}
    </nav>
  </aside>
);
