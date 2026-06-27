#pragma once

#include <string>
#include <vector>
#include "models/AnimationModels.h"

namespace studio {

class SortingAlgorithms {
 public:
  StepResponse run(const std::string& algorithm, std::vector<int> values) const;
};

}  // namespace studio
