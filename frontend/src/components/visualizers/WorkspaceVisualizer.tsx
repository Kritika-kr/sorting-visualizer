import { AlgorithmCategory, AnimationStep } from '../../types/algorithm';
import { ArrayVisualizer } from './ArrayVisualizer';
import { GraphVisualizer } from './GraphVisualizer';
import { StructureVisualizer } from './StructureVisualizer';

interface WorkspaceVisualizerProps {
  category: AlgorithmCategory;
  array: number[];
  step?: AnimationStep;
}

export const WorkspaceVisualizer = ({ category, array, step }: WorkspaceVisualizerProps) => {
  if (category === 'Sorting' || category === 'Searching') return <ArrayVisualizer array={array} step={step} />;
  if (category === 'Graphs') return <GraphVisualizer step={step} />;
  if (category === 'Linked List' || category === 'Stack' || category === 'Queue' || category === 'Trees') return <StructureVisualizer mode={category} step={step} />;
  return (
    <div className="grid min-h-[360px] place-items-center rounded-md border border-white/10 bg-slate-950/60 p-6 text-center text-slate-300">
      Dynamic programming workspace with state-table animation hooks is scaffolded for backend traces.
    </div>
  );
};
