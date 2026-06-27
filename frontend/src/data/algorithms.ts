import { AlgorithmCategory, AlgorithmInfo, GraphEdge, GraphNode } from '../types/algorithm';

const sortingCode = {
  cpp: ['for (int i = 0; i < n; ++i) {', '  for (int j = 0; j < n - i - 1; ++j) {', '    if (a[j] > a[j + 1]) {', '      swap(a[j], a[j + 1]);', '    }', '  }', '}'],
  java: ['for (int i = 0; i < n; i++) {', '  for (int j = 0; j < n - i - 1; j++) {', '    if (a[j] > a[j + 1]) {', '      int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;', '    }', '  }', '}'],
  python: ['for i in range(n):', '    for j in range(0, n - i - 1):', '        if a[j] > a[j + 1]:', '            a[j], a[j + 1] = a[j + 1], a[j]'],
  javascript: ['for (let i = 0; i < n; i++) {', '  for (let j = 0; j < n - i - 1; j++) {', '    if (a[j] > a[j + 1]) {', '      [a[j], a[j + 1]] = [a[j + 1], a[j]];', '    }', '  }', '}']
};

const searchCode = {
  cpp: ['int left = 0, right = n - 1;', 'while (left <= right) {', '  int mid = left + (right - left) / 2;', '  if (a[mid] == target) return mid;', '  if (a[mid] < target) left = mid + 1;', '  else right = mid - 1;', '}'],
  java: ['int left = 0, right = a.length - 1;', 'while (left <= right) {', '  int mid = left + (right - left) / 2;', '  if (a[mid] == target) return mid;', '  if (a[mid] < target) left = mid + 1;', '  else right = mid - 1;', '}'],
  python: ['left, right = 0, len(a) - 1', 'while left <= right:', '    mid = left + (right - left) // 2', '    if a[mid] == target: return mid', '    if a[mid] < target: left = mid + 1', '    else: right = mid - 1'],
  javascript: ['let left = 0, right = a.length - 1;', 'while (left <= right) {', '  const mid = left + Math.floor((right - left) / 2);', '  if (a[mid] === target) return mid;', '  if (a[mid] < target) left = mid + 1;', '  else right = mid - 1;', '}']
};

const structureCode = {
  cpp: ['Node* cur = head;', 'while (cur != nullptr) {', '  visit(cur);', '  cur = cur->next;', '}'],
  java: ['Node cur = head;', 'while (cur != null) {', '  visit(cur);', '  cur = cur.next;', '}'],
  python: ['cur = head', 'while cur:', '    visit(cur)', '    cur = cur.next'],
  javascript: ['let cur = head;', 'while (cur) {', '  visit(cur);', '  cur = cur.next;', '}']
};

const graphCode = {
  cpp: ['queue<int> q;', 'q.push(start);', 'while (!q.empty()) {', '  int u = q.front(); q.pop();', '  for (int v : adj[u]) visit(v);', '}'],
  java: ['Queue<Integer> q = new ArrayDeque<>();', 'q.add(start);', 'while (!q.isEmpty()) {', '  int u = q.remove();', '  for (int v : adj.get(u)) visit(v);', '}'],
  python: ['queue = deque([start])', 'while queue:', '    u = queue.popleft()', '    for v in graph[u]:', '        visit(v)'],
  javascript: ['const queue = [start];', 'while (queue.length) {', '  const u = queue.shift();', '  graph[u].forEach(visit);', '}']
};

const buildInfo = (
  id: string,
  name: string,
  category: AlgorithmCategory,
  code: AlgorithmInfo['code'],
  complexity: AlgorithmInfo['complexity']
): AlgorithmInfo => ({
  id,
  name,
  category,
  description: `${name} visualized as backend-generated execution steps with line highlighting and state transitions.`,
  howItWorks: [
    'The backend produces a timeline of primitive actions instead of only a final answer.',
    'The workspace replays each action, updates statistics, and highlights the active code line.',
    'Every comparison, pointer move, visit, edge relaxation, or write is represented explicitly.'
  ],
  applications: ['Interview preparation', 'Classroom demonstrations', 'Algorithm tracing', 'Performance intuition'],
  advantages: ['Transparent step-by-step execution', 'Good for debugging mental models', 'Works with pause, resume, and stepping'],
  disadvantages: ['Animation traces can be large', 'Some advanced variants need richer input models'],
  complexity,
  pseudocode: code.cpp.map((line) => line.replace(/int /g, '').replace(/;/g, '')),
  code
});

export const algorithms: AlgorithmInfo[] = [
  ...['bubble-sort', 'selection-sort', 'insertion-sort', 'merge-sort', 'quick-sort', 'heap-sort'].map((id) =>
    buildInfo(id, id.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join(' '), 'Sorting', sortingCode, {
      best: id === 'bubble-sort' || id === 'insertion-sort' ? 'O(n)' : 'O(n log n)',
      average: id.includes('sort') && ['merge-sort', 'quick-sort', 'heap-sort'].includes(id) ? 'O(n log n)' : 'O(n^2)',
      worst: id === 'quick-sort' ? 'O(n^2)' : ['merge-sort', 'heap-sort'].includes(id) ? 'O(n log n)' : 'O(n^2)',
      space: id === 'merge-sort' ? 'O(n)' : 'O(1)'
    })
  ),
  ...['linear-search', 'binary-search', 'jump-search', 'interpolation-search'].map((id) =>
    buildInfo(id, id.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join(' '), 'Searching', searchCode, {
      best: 'O(1)',
      average: id === 'linear-search' ? 'O(n)' : 'O(log n)',
      worst: id === 'linear-search' ? 'O(n)' : id === 'jump-search' ? 'O(sqrt n)' : 'O(log n)',
      space: 'O(1)'
    })
  ),
  buildInfo('linked-list', 'Linked List Operations', 'Linked List', structureCode, { best: 'O(1)', average: 'O(n)', worst: 'O(n)', space: 'O(1)' }),
  buildInfo('stack', 'Stack Operations', 'Stack', structureCode, { best: 'O(1)', average: 'O(1)', worst: 'O(1)', space: 'O(n)' }),
  buildInfo('queue', 'Queue Operations', 'Queue', structureCode, { best: 'O(1)', average: 'O(1)', worst: 'O(1)', space: 'O(n)' }),
  buildInfo('bst', 'Binary Search Tree', 'Trees', structureCode, { best: 'O(log n)', average: 'O(log n)', worst: 'O(n)', space: 'O(h)' }),
  ...['bfs', 'dfs', 'dijkstra', 'prim', 'kruskal', 'topological-sort'].map((id) =>
    buildInfo(id, id.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join(' '), 'Graphs', graphCode, {
      best: 'O(V + E)',
      average: id === 'dijkstra' || id === 'prim' ? 'O(E log V)' : 'O(V + E)',
      worst: id === 'kruskal' ? 'O(E log E)' : id === 'dijkstra' || id === 'prim' ? 'O(E log V)' : 'O(V + E)',
      space: 'O(V + E)'
    })
  ),
  buildInfo('dynamic-programming', 'Dynamic Programming Patterns', 'Dynamic Programming', structureCode, { best: 'Problem dependent', average: 'State dependent', worst: 'State dependent', space: 'State dependent' })
];

export const categories: AlgorithmCategory[] = ['Sorting', 'Searching', 'Linked List', 'Stack', 'Queue', 'Trees', 'Graphs', 'Dynamic Programming'];

export const defaultGraphNodes: GraphNode[] = [
  { id: 'A', x: 12, y: 22 },
  { id: 'B', x: 36, y: 14 },
  { id: 'C', x: 68, y: 22 },
  { id: 'D', x: 24, y: 66 },
  { id: 'E', x: 54, y: 58 },
  { id: 'F', x: 82, y: 70 }
];

export const defaultGraphEdges: GraphEdge[] = [
  { source: 'A', target: 'B', weight: 4 },
  { source: 'A', target: 'D', weight: 2 },
  { source: 'B', target: 'C', weight: 5 },
  { source: 'B', target: 'E', weight: 1 },
  { source: 'D', target: 'E', weight: 3 },
  { source: 'E', target: 'F', weight: 7 },
  { source: 'C', target: 'F', weight: 2 }
];
