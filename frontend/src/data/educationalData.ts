export interface EducationalDetails {
  overview: string;
  howItWorks: string[];
  whenNotToUse: string;
  realWorldExample: string;
  interviewQuestions: string[];
  commonMistakes: string[];
  optimizations: string;
}

export const educationalData: Record<string, EducationalDetails> = {
  'bubble-sort': {
    overview: 'Bubble Sort is a simple, comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This pass-through is repeated until the list is fully sorted.',
    howItWorks: [
      'Start at the beginning of the array.',
      'Compare the first two adjacent elements. If the first is greater than the second, swap them.',
      'Move to the next pair of elements and repeat the comparison/swap step.',
      'Continue until the end of the array is reached (the largest element "bubbles" to its final position).',
      'Repeat the entire process for the remaining unsorted portion of the array.'
    ],
    whenNotToUse: 'Avoid using Bubble Sort for large datasets, as its average and worst-case time complexity is O(n²), making it extremely slow compared to Quick Sort or Merge Sort.',
    realWorldExample: 'Sorting a small hand of playing cards, or checking if an already nearly-sorted list needs a quick clean-up pass.',
    interviewQuestions: [
      'What is the best-case time complexity of optimized Bubble Sort? (Answer: O(n) when the array is already sorted).',
      'Is Bubble Sort a stable sorting algorithm? Explain why. (Answer: Yes, because it does not swap equal elements).',
      'Explain how a boolean flag can optimize Bubble Sort.'
    ],
    commonMistakes: [
      'Forgetting to stop the inner loop early, resulting in unnecessary comparisons of already sorted elements.',
      'Not implementing a swap check flag, which forces O(n²) execution even on fully sorted inputs.'
    ],
    optimizations: 'Implement a boolean flag that tracks whether any swaps were made during a pass. If no swaps occurred, the array is already sorted, and we can terminate early.'
  },
  'selection-sort': {
    overview: 'Selection Sort is an in-place comparison sorting algorithm. It divides the array into a sorted and an unsorted region, repeatedly finds the minimum element from the unsorted region, and swaps it with the first element of the unsorted region.',
    howItWorks: [
      'Set the first unsorted index as the current minimum.',
      'Iterate through the rest of the unsorted portion to find the actual minimum value.',
      'If a smaller element is found, update the minimum index.',
      'After checking all unsorted elements, swap the minimum value with the element at the beginning of the unsorted portion.',
      'Advance the boundary between sorted and unsorted portions by one index.'
    ],
    whenNotToUse: 'Do not use Selection Sort when stable sorting is required, or on large datasets where O(n²) operations are unacceptable.',
    realWorldExample: 'Finding the cheapest item on a shelf by scanning left-to-right, placing it first, then repeating for the remaining items.',
    interviewQuestions: [
      'Why is Selection Sort generally preferred over Bubble Sort? (Answer: It performs far fewer swaps: exactly O(n) swaps).',
      'Can Selection Sort be implemented stably? (Answer: Only by inserting elements rather than swapping, which changes auxiliary space/time properties).'
    ],
    commonMistakes: [
      'Confusing the minimum index tracker with the minimum value tracker.',
      'Unnecessarily swapping an element with itself when the current element is already the minimum.'
    ],
    optimizations: 'Double Selection Sort: Search for both the minimum and maximum elements in a single pass to sort the array from both ends simultaneously.'
  },
  'insertion-sort': {
    overview: 'Insertion Sort builds the final sorted array one item at a time. It takes each element from the unsorted portion and inserts it into its correct position within the already sorted portion of the array.',
    howItWorks: [
      'Assume the first element is already sorted.',
      'Pick the next element (key) from the unsorted portion.',
      'Compare the key with elements in the sorted portion from right to left.',
      'Shift larger elements to the right to make space.',
      'Insert the key into its correct sorted location.',
      'Repeat for all remaining unsorted elements.'
    ],
    whenNotToUse: 'Avoid using on large, highly randomized datasets. While efficient for small collections, its quadratic time complexity makes it scale poorly.',
    realWorldExample: 'Sorting a hand of cards while they are dealt to you. You pick one card at a time and slide it into the correct position.',
    interviewQuestions: [
      'What makes Insertion Sort ideal for online algorithms? (Answer: It can sort a list as it receives it).',
      'How does Insertion Sort perform on nearly sorted data? (Answer: Extremely fast, approaching O(n) complexity).'
    ],
    commonMistakes: [
      'Performing full swaps instead of shifting values, which requires three times as many memory writes.',
      'Failing to stop the insertion scan once the correct position is found.'
    ],
    optimizations: 'Use binary search to find the correct insertion index in the sorted subarray instead of scanning sequentially (known as Binary Insertion Sort).'
  },
  'merge-sort': {
    overview: 'Merge Sort is a stable, divide-and-conquer sorting algorithm. It recursively splits the array in half, sorts the sub-arrays, and merges them back together in sorted order.',
    howItWorks: [
      'If the array has one or zero elements, it is already sorted.',
      'Divide the array into two halves at the midpoint.',
      'Recursively apply Merge Sort to the left and right halves.',
      'Merge the two sorted halves back into a single sorted array by comparing elements pointer-by-pointer.'
    ],
    whenNotToUse: 'When memory is highly constrained. Merge Sort requires O(n) auxiliary space to store temporary merged arrays, which is inefficient on systems with limited RAM.',
    realWorldExample: 'Combining two pre-sorted lists of user logs from different servers into a single chronological stream.',
    interviewQuestions: [
      'Explain the space complexity of Merge Sort. (Answer: O(n) due to the auxiliary arrays used during merging).',
      'Why is Merge Sort preferred for sorting linked lists? (Answer: Pointers make merging easy without requiring extra copy space, unlike arrays).'
    ],
    commonMistakes: [
      'Incorrectly calculating midpoints, which can lead to infinite recursion stacks.',
      'Creating new arrays during recursion instead of using shared buffers, causing massive GC pressure.'
    ],
    optimizations: 'Use Insertion Sort for small subarrays (size < 15) to avoid the overhead of recursive calls.'
  },
  'quick-sort': {
    overview: 'Quick Sort is a highly efficient, divide-and-conquer sorting algorithm. It picks an element as a pivot, partitions the array such that smaller elements go left and larger elements go right, and recursively sorts the sub-arrays.',
    howItWorks: [
      'Choose a pivot element from the array.',
      'Rearrange (partition) the array so that all elements smaller than the pivot are on the left, and larger elements are on the right.',
      'Recursively apply Quick Sort to the sub-array of smaller elements.',
      'Recursively apply Quick Sort to the sub-array of larger elements.'
    ],
    whenNotToUse: 'Do not use when stability is strictly required, or in safety-critical systems if the worst-case O(n²) performance could trigger timeouts (unless a secure pivot selection is guaranteed).',
    realWorldExample: 'The built-in `std::sort` in C++ (often implemented as IntroSort, a hybrid of Quick Sort, Heap Sort, and Insertion Sort).',
    interviewQuestions: [
      'How do you avoid the worst-case O(n²) complexity of Quick Sort? (Answer: Choose a random pivot, or use Median-of-Three selection).',
      'What is the space complexity of Quick Sort? (Answer: O(log n) auxiliary space due to the recursive stack).'
    ],
    commonMistakes: [
      'Choosing the first or last element as pivot on pre-sorted arrays, leading to O(n²) worst-case execution.',
      'Incorrect index bounds in the partitioning loop leading to infinite loops.'
    ],
    optimizations: 'Implement tail recursion optimization to only recurse on the smaller partition first, reducing worst-case stack depth to O(log n).'
  },
  'heap-sort': {
    overview: 'Heap Sort is an in-place comparison sort that uses a binary heap data structure. It builds a max-heap from the input, repeatedly extracts the maximum element, and reconstructs the heap until sorted.',
    howItWorks: [
      'Build a max-heap from the input array.',
      'Swap the root (maximum value) with the last element of the heap.',
      'Decrease the heap size by 1.',
      'Run heapify on the root to restore the max-heap property.',
      'Repeat the swap and heapify steps until the heap is empty.'
    ],
    whenNotToUse: 'Avoid when sorting speed is critical and cache locality matters. Heap Sort has poor cache performance because elements are accessed across wide memory ranges.',
    realWorldExample: 'Systems requiring guaranteed O(n log n) sorting speed without using extra memory, such as embedded firmware or flight control software.',
    interviewQuestions: [
      'Is Heap Sort stable? (Answer: No, the heap structure scrambles the relative order of identical elements).',
      'What is the time complexity of building a heap? (Answer: O(n) mathematically, not O(n log n)).'
    ],
    commonMistakes: [
      'Implementing heapify recursively without limiting tree depth, which can overflow the stack.',
      'Incorrectly converting 0-indexed array indices to binary tree child nodes (left = 2i+1, right = 2i+2).'
    ],
    optimizations: 'Bottom-up heapify: optimize the sift-down phase by traversing down to the leaf node first, then searching upwards for the insert location, saving comparisons.'
  },
  'linear-search': {
    overview: 'Linear Search sequentially checks each element of the list until a match is found or the end of the list is reached. It is the simplest search algorithm.',
    howItWorks: [
      'Start at index 0.',
      'Compare the current element with the target value.',
      'If they match, return the current index.',
      'If not, move to the next index.',
      'Repeat until the target is found or the array ends.'
    ],
    whenNotToUse: 'Avoid using on large datasets where searches are frequent. Sort the data first and use Binary Search instead.',
    realWorldExample: 'Looking for a specific name in an unsorted list of attendees.',
    interviewQuestions: [
      'When is Linear Search preferred over Binary Search? (Answer: When the array is unsorted and we only need to perform a single or few searches).',
      'What is the space complexity? (Answer: O(1) auxiliary space).'
    ],
    commonMistakes: [
      'Searching past the end of the array bounds (Off-By-One errors).',
      'Not returning early when the target is found.'
    ],
    optimizations: 'Self-organizing list: Move the matched item to the front of the list so subsequent searches find it faster.'
  },
  'binary-search': {
    overview: 'Binary Search is a fast, divide-and-conquer search algorithm. It repeatedly halves the search interval on a sorted array until the target is found.',
    howItWorks: [
      'Start with a search space covering the entire sorted array.',
      'Find the middle element.',
      'If the middle element equals the target, return its index.',
      'If the target is smaller, repeat the search on the left half.',
      'If the target is larger, repeat the search on the right half.',
      'Repeat until target is found or search space is empty.'
    ],
    whenNotToUse: 'Do not use on unsorted arrays. Sorting an array takes O(n log n) which is slower than a linear search if you only search once.',
    realWorldExample: 'Looking up a word in a physical dictionary, or searching a database index.',
    interviewQuestions: [
      'What is a common bug when calculating the midpoint? (Answer: Using `(low + high) / 2` can overflow integer limits. Use `low + (high - low) / 2` instead).',
      'What is the time complexity of Binary Search? (Answer: O(log n)).'
    ],
    commonMistakes: [
      'Running Binary Search on unsorted data, returning incorrect results.',
      'Failing to update search pointers correctly, causing infinite loops (e.g. not setting `left = mid + 1`).'
    ],
    optimizations: 'Use bit-shifts for division (`mid = (low + high) >> 1`) and cache-friendly layout configurations.'
  },
  'jump-search': {
    overview: 'Jump Search is a search algorithm for sorted arrays. It checks fewer elements than Linear Search by jumping ahead by fixed steps, then performing a linear search backward.',
    howItWorks: [
      'Determine the optimal step size (usually √n).',
      'Jump ahead by the step size until an element larger than the target is found.',
      'Perform a linear search backward from the current jump block to find the target.'
    ],
    whenNotToUse: 'When binary search is available. Binary Search performs O(log n) searches which is faster than Jump Search’s O(√n) complexity.',
    realWorldExample: 'Scanning chapters in a book index by jumping every 10 pages, then reading line by line once you pass your target chapter.',
    interviewQuestions: [
      'Why is Jump Search useful compared to Binary Search? (Answer: It only traverses forward in jumps, which is beneficial if backtracking is expensive in the storage medium).',
      'What is the optimal jump step size? (Answer: √n, where n is the array length).'
    ],
    commonMistakes: [
      'Using a constant jump size that does not scale with the size of the array.',
      'Failing to handle edge cases where the target lies in the final incomplete block.'
    ],
    optimizations: 'Combine Jump Search with Binary Search: Jump in large steps, then perform binary search inside the identified block instead of linear search.'
  },
  'interpolation-search': {
    overview: 'Interpolation Search is an improvement over Binary Search for sorted, uniformly distributed arrays. It estimates the position of the target element based on key values at the bounds.',
    howItWorks: [
      'Calculate the probe position using the formula: `pos = low + [(target - arr[low]) * (high - low)] / (arr[high] - arr[low])`.',
      'If the probed element matches the target, return its index.',
      'If the target is smaller, search the left sub-array.',
      'If the target is larger, search the right sub-array.'
    ],
    whenNotToUse: 'Do not use when the data distribution is highly non-uniform or clustered, as time complexity can degrade to O(n).',
    realWorldExample: 'Searching for a name in a phone book. If the name starts with "B", you start searching near the front instead of the exact middle.',
    interviewQuestions: [
      'What is the average time complexity of Interpolation Search? (Answer: O(log log n)).',
      'Under what condition does Interpolation Search perform poorly? (Answer: When data is exponentially distributed or heavily clustered).'
    ],
    commonMistakes: [
      'Dividing by zero in the position formula when `arr[high] == arr[low]`.',
      'Failing to verify if the calculated position lies within the array bounds.'
    ],
    optimizations: 'Fallback to Binary Search if the calculated probe position is consistently outside normal distributions.'
  },
  'bfs': {
    overview: 'Breadth-First Search (BFS) is a graph traversal algorithm. It explores all nodes at the present depth level before moving to nodes at the next depth level.',
    howItWorks: [
      'Initialize a queue and push the starting node.',
      'Mark the starting node as visited.',
      'While the queue is not empty, dequeue a node.',
      'Process the node and inspect all its unvisited neighbors.',
      'Mark neighbors as visited and enqueue them.',
      'Repeat until the queue is empty.'
    ],
    whenNotToUse: 'Avoid when memory is limited and the graph is extremely wide, as the queue will store a large number of nodes.',
    realWorldExample: 'Social network connections (finding friends within 3 degrees of separation), or web crawlers.',
    interviewQuestions: [
      'What data structure does BFS use? (Answer: A Queue, which guarantees FIFO discovery order).',
      'Does BFS guarantee the shortest path? (Answer: Yes, on unweighted graphs).'
    ],
    commonMistakes: [
      'Not marking a node as visited when enqueuing, leading to duplicate nodes in the queue and infinite loops.',
      'Using a stack instead of a queue, which turns the search into DFS.'
    ],
    optimizations: 'Bidirectional BFS: Run two simultaneous breadth-first searches—one from the source and one from the target—to find the intersection, reducing search space.'
  },
  'dfs': {
    overview: 'Depth-First Search (DFS) is a graph traversal algorithm. It starts at a source node and explores as far as possible along each branch before backtracking.',
    howItWorks: [
      'Start at the root or starting node.',
      'Mark the node as visited.',
      'Recursively visit each unvisited neighbor.',
      'If a node has no unvisited neighbors, backtrack to the previous node.',
      'Repeat until all nodes are visited.'
    ],
    whenNotToUse: 'Avoid on extremely deep or infinite graphs, as it can cause stack overflow or run indefinitely without finding nearby nodes.',
    realWorldExample: 'Solving puzzles or mazes, where you follow a single path to a dead end before backtracking.',
    interviewQuestions: [
      'What is the space complexity of DFS? (Answer: O(V) in the worst case, due to the recursion stack).',
      'How do you detect cycles in a directed graph using DFS? (Answer: By tracking nodes in the current recursion stack; if we visit a node already in the stack, a cycle exists).'
    ],
    commonMistakes: [
      'Failing to track visited nodes, leading to infinite recursion in graphs with cycles.',
      'Using excessive memory by passing large graph copies down the recursion stack.'
    ],
    optimizations: 'Iterative DFS: Implement DFS using an explicit stack structure instead of recursion to prevent stack overflows on deep graphs.'
  },
  'dijkstra': {
    overview: "Dijkstra's Algorithm finds the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights.",
    howItWorks: [
      'Set the distance to the source node to 0, and all other distances to infinity.',
      'Add all nodes to a priority queue, sorted by distance.',
      'Extract the node with the minimum distance.',
      'For each neighbor of the extracted node, calculate the distance through the node.',
      'If the new distance is smaller than the recorded distance, update (relax) the distance.',
      'Repeat until the priority queue is empty.'
    ],
    whenNotToUse: 'Do not use when the graph contains negative edge weights, as Dijkstra can produce incorrect paths (use Bellman-Ford instead).',
    realWorldExample: 'GPS navigation systems like Google Maps finding the fastest driving route between two addresses.',
    interviewQuestions: [
      "Why doesn't Dijkstra's algorithm work with negative edge weights? (Answer: Once a node is visited, Dijkstra assumes its shortest path is final. Negative weights can violate this greedy assumption later).",
      "What is the time complexity when using a Min-Heap? (Answer: O((V + E) log V))."
    ],
    commonMistakes: [
      'Using a standard queue instead of a priority queue, which degrades performance to O(V²).',
      'Forgetting to update the priority queue elements after relaxing an edge.'
    ],
    optimizations: 'Use a Fibonacci Heap to reduce the time complexity of the decrease-key operation to O(1), leading to an overall complexity of O(E + V log V).'
  },
  'prim': {
    overview: "Prim's Algorithm is a greedy algorithm that finds the Minimum Spanning Tree (MST) for a weighted, undirected graph. It grows the spanning tree one vertex at a time from a starting vertex.",
    howItWorks: [
      'Select a starting vertex and add it to the MST.',
      'Inspect all edges connecting vertices in the MST to vertices not yet in the MST.',
      'Choose the edge with the minimum weight and add its destination vertex to the MST.',
      'Repeat until all vertices are included in the tree.'
    ],
    whenNotToUse: 'Avoid on highly sparse graphs where Kruskal’s algorithm (which scales better with fewer edges) is generally faster.',
    realWorldExample: 'Designing a cable network layout to connect all houses in a neighborhood using the minimum total cable length.',
    interviewQuestions: [
      "What is the difference between Prim's and Kruskal's algorithms? (Answer: Prim grows the tree from a single node, whereas Kruskal builds the tree by connecting independent forest components).",
      "What is the time complexity of Prim's algorithm using an adjacency list and min-heap? (Answer: O(E log V))."
    ],
    commonMistakes: [
      'Not updating the distance values of adjacent vertices in the priority queue.',
      'Adding cycles by failing to check if the candidate vertex is already in the MST.'
    ],
    optimizations: 'Use Fibonacci heaps for dense graphs to optimize edge relaxation.'
  },
  'kruskal': {
    overview: "Kruskal's Algorithm finds the Minimum Spanning Tree (MST) for a connected, weighted, undirected graph. It sorts all edges and adds them one-by-one to the tree, avoiding cycles.",
    howItWorks: [
      'Create a forest where each vertex is an independent tree.',
      'Sort all edges in the graph in ascending order of weight.',
      'Pick the cheapest edge. If it connects two different trees, merge the trees and add the edge to the MST.',
      'If the edge connects vertices in the same tree (creates a cycle), discard it.',
      'Repeat until there is only one tree containing all vertices.'
    ],
    whenNotToUse: 'Avoid on dense graphs with a very large number of edges, as sorting all edges can become a performance bottleneck.',
    realWorldExample: 'Connecting cities with roads such that the total paving cost is minimized and all cities are reachable.',
    interviewQuestions: [
      'What data structure is essential for Kruskal’s algorithm to detect cycles efficiently? (Answer: Disjoint Set Union / Union-Find).',
      'What is the worst-case time complexity of Kruskal’s? (Answer: O(E log E) or O(E log V) because sorting edges takes O(E log E) time).'
    ],
    commonMistakes: [
      'Using a linear cycle-detection search instead of Union-Find, causing the algorithm to run in O(V * E) time.',
      'Failing to sort the edges before beginning tree insertion.'
    ],
    optimizations: 'Use Union-by-Rank and Path Compression in the Disjoint Set implementation to make find and union operations run in near-constant O(α(V)) time.'
  },
  'topological-sort': {
    overview: 'Topological Sort produces a linear ordering of vertices for a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, vertex u comes before v in the ordering.',
    howItWorks: [
      'Identify all nodes with an in-degree (incoming edges) of 0.',
      'Add these nodes to a queue.',
      'While the queue is not empty, dequeue a node and append it to the sorted list.',
      'For each neighbor of the dequeued node, decrement its in-degree by 1.',
      'If a neighbor’s in-degree becomes 0, enqueue it.',
      'Repeat until queue is empty. If the sorted list does not contain all vertices, a cycle exists.'
    ],
    whenNotToUse: 'Do not use if the graph is not directed or if it contains cycles (non-DAG). Topological sorting is impossible in these cases.',
    realWorldExample: 'Determining the order of college courses that have strict prerequisites, or scheduling build tasks in build tools (like Make or Gradle).',
    interviewQuestions: [
      'Can a graph have multiple topological sorts? (Answer: Yes, if there are multiple independent nodes with in-degree 0 at any step).',
      'Explain Kahn’s algorithm versus DFS-based topological sorting.'
    ],
    commonMistakes: [
      'Attempting to sort a graph containing cycles, resulting in an incomplete list.',
      'Forgetting to decrement in-degrees correctly in the neighbor updates.'
    ],
    optimizations: 'Store in-degrees in a hash map or direct array for O(1) lookups during execution.'
  }
};
