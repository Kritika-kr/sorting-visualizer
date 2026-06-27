#pragma once

#include <string>
#include "models/AnimationModels.h"

namespace studio {

class StructureAlgorithms {
 public:
  StepResponse run(const std::string& algorithm) const;
};

}  // namespace studio
