# Algorithm Studio

A modern full-stack algorithm learning platform rebuilt from the original sorting visualizer.

## Stack

- Frontend: React, TypeScript, Tailwind CSS, Framer Motion, Vite
- Backend: C++20, Drogon
- Communication: REST APIs returning animation steps
- Build: CMake for backend, Vite for frontend

## Project Structure

```text
frontend/
  src/components/layout
  src/components/panels
  src/components/visualizers
  src/data
  src/hooks
  src/services
  src/types

backend/
  controllers/
  algorithms/
  services/
  middleware/
  models/
  utils/
```

## Frontend

```bash
npm install
npm run start
```

The Vite app runs on `http://localhost:5173` and proxies `/api` to the Drogon backend on port `8080`.

## Backend

Install Drogon and CMake, then run:

```bash
npm run backend:configure
npm run backend:build
./backend/build/algorithm_studio
```

Health endpoint:

```bash
GET http://localhost:8080/api/health
```

Example animation endpoint:

```bash
POST http://localhost:8080/api/algorithms/sorting/quick-sort
Content-Type: application/json

{
  "array": [42, 17, 83, 9, 31],
  "target": 31
}
```

Response shape:

```json
{
  "steps": [
    { "action": "compare", "i": 2, "j": 3, "line": 3, "note": "Compare two values" },
    { "action": "swap", "i": 2, "j": 3, "line": 4, "note": "Swap two values" }
  ],
  "stats": {
    "comparisons": 1,
    "swaps": 1,
    "recursionDepth": 0,
    "visitedNodes": 0,
    "executionTimeMs": 2,
    "memoryBytes": 168
  }
}
```

## Features

- Professional landing page, sidebar navigation, top navbar, dashboard-style workspace
- Sorting, searching, linked list, stack, queue, BST/tree, graph, and DP categories
- Backend-style animation step contract with frontend fallback generator for offline development
- Backend-generated animation step contract for all algorithm execution
- Compare Algorithms mode with synchronized side-by-side playback, independent speed controls, live winner metrics, and educational result explanation
- Code panel with C++, Java, Python, and JavaScript snippets
- Explanation panel with complexity, applications, advantages, and disadvantages
- Statistics for comparisons, swaps, recursion depth, visited nodes, execution time, and estimated memory
- Dark/light theme, fullscreen visualization, screenshots, keyboard shortcuts, favorites, and recently viewed algorithms

Keyboard shortcuts:

- Space: play/pause
- ArrowRight: step forward
- ArrowLeft: step backward
- R: reset

## Comparison Mode

Open `Compare` from the landing page, sidebar, or workspace header.

Supported examples:

- Bubble Sort vs Quick Sort
- Merge Sort vs Heap Sort
- Linear Search vs Binary Search
- BFS vs DFS

The comparison workspace runs two independent animation players on the same input. Use `Start Both`, `Pause Both`, `Reset Both`, and `Step Both` for synchronized playback, or use each panel's local controls and speed slider independently. `Lock Speeds` keeps both players at the same playback speed.

## Backend Contract

The frontend expects the backend to return animation steps. Local algorithm fallback generation has been removed from the production request path.

Search response steps include structured search fields:

```json
{
  "action": "compare",
  "index": 5,
  "visited": [0, 2, 5],
  "found": false,
  "line": 3,
  "note": "Probe midpoint"
}
```
