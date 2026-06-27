#include "services/algorithms/GraphAlgorithms.h"

#include <vector>

namespace studio {

StepResponse GraphAlgorithms::run(const std::string& algorithm) const {
  StepResponse response;
  const std::vector<std::string> nodes = {"A", "B", "D", "E", "C", "F"};
  const std::vector<std::pair<std::string, std::string>> edges = {{"A", "B"}, {"A", "D"}, {"D", "E"}, {"B", "E"}, {"B", "C"}, {"C", "F"}};
  for (int i = 0; i < static_cast<int>(nodes.size()); ++i) {
    response.stats.visitedNodes++;
    response.stats.traversalOrder.push_back(nodes[i]);
    AnimationStep visit;
    visit.action = "visit";
    visit.node = nodes[i];
    visit.line = 4;
    visit.note = algorithm + " visits node " + nodes[i];
    response.steps.push_back(std::move(visit));

    AnimationStep edge;
    edge.action = algorithm == "dijkstra" ? "relax" : "edge";
    edge.edge = edges[i % edges.size()];
    edge.cost = i + 1;
    edge.line = 5;
    edge.note = "Inspect graph edge";
    response.stats.edgesTraversed++;
    response.stats.totalCost += edge.cost;
    response.steps.push_back(std::move(edge));
  }
  AnimationStep complete;
  complete.action = "complete";
  complete.line = 6;
  complete.note = "Graph algorithm complete";
  response.steps.push_back(std::move(complete));
  response.stats.executionTimeMs = static_cast<int>(response.steps.size());
  response.stats.memoryBytes = static_cast<int>((nodes.size() + edges.size()) * 64);
  return response;
}

}  // namespace studio
