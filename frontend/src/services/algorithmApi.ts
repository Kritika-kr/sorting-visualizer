import { defaultGraphEdges, defaultGraphNodes } from '../data/algorithms';
import { AlgorithmCategory, StepResponse } from '../types/algorithm';

const API_URL = import.meta.env.VITE_API_URL ?? '';

export interface AlgorithmRequest {
  id: string;
  category: AlgorithmCategory;
  array: number[];
  target: number;
}

export const requestAnimationSteps = async (request: AlgorithmRequest): Promise<StepResponse> => {
  const endpoint = `${API_URL}/api/algorithms/${request.category.toLowerCase().replace(/\s+/g, '-')}/${request.id}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ array: request.array, target: request.target, nodes: defaultGraphNodes, edges: defaultGraphEdges })
  });
  if (!response.ok) throw new Error(`Backend returned ${response.status}`);
  return (await response.json()) as StepResponse;
};
