#pragma once

#include <string>
#include <vector>
#include "models/AnimationModels.h"

namespace studio {

class SearchingAlgorithms {
 public:
  StepResponse run(const std::string& algorithm, std::vector<int> values, int target) const;
};

}  // namespace studio
