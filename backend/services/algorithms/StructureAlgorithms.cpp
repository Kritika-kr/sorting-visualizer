#include "services/algorithms/StructureAlgorithms.h"

#include <algorithm>
#include <vector>

namespace studio {

StepResponse StructureAlgorithms::run(const std::string& algorithm) const {
  StepResponse response;
  std::vector<std::string> actions = algorithm == "stack" ? std::vector<std::string>{"push", "push", "peek", "pop"}
                                  : algorithm == "queue" ? std::vector<std::string>{"enqueue", "enqueue", "dequeue", "enqueue"}
                                                          : std::vector<std::string>{"insert", "pointer", "visit", "delete", "pointer"};
  for (int i = 0; i < static_cast<int>(actions.size()); ++i) {
    response.stats.visitedNodes++;
    response.stats.traversalOrder.push_back("N" + std::to_string(i + 1));
    AnimationStep step;
    step.action = actions[i];
    step.index = i;
    step.i = i;
    step.node = "N" + std::to_string(i + 1);
    step.line = std::min(i + 1, 4);
    step.note = algorithm + " operation step";
    response.steps.push_back(std::move(step));
  }
  AnimationStep complete;
  complete.action = "complete";
  complete.line = 4;
  complete.note = "Structure operation complete";
  response.steps.push_back(std::move(complete));
  response.stats.height = algorithm == "bst" ? 3 : static_cast<int>(actions.size());
  response.stats.executionTimeMs = static_cast<int>(response.steps.size());
  response.stats.memoryBytes = static_cast<int>(actions.size() * 32);
  return response;
}

}  // namespace studio
