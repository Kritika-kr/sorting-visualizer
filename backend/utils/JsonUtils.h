#pragma once

#include <json/json.h>
#include <vector>
#include "models/AnimationModels.h"

namespace studio {

std::vector<int> readIntArray(const Json::Value& body, const std::string& key);
int readInt(const Json::Value& body, const std::string& key, int fallback);
Json::Value toJson(const StepResponse& response);

}  // namespace studio
