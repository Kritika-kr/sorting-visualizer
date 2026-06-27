#pragma once

#include <drogon/HttpController.h>
#include "services/AlgorithmService.h"

namespace studio {

class AlgorithmController final : public drogon::HttpController<AlgorithmController> {
 public:
  METHOD_LIST_BEGIN
  ADD_METHOD_TO(AlgorithmController::health, "/api/health", drogon::Get, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::sorting, "/api/algorithms/sorting/{1}", drogon::Post, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::searching, "/api/algorithms/searching/{1}", drogon::Post, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::structures, "/api/algorithms/linked-list/{1}", drogon::Post, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::structures, "/api/algorithms/stack/{1}", drogon::Post, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::structures, "/api/algorithms/queue/{1}", drogon::Post, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::structures, "/api/algorithms/trees/{1}", drogon::Post, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::graphs, "/api/algorithms/graphs/{1}", drogon::Post, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::structures, "/api/algorithms/dynamic-programming/{1}", drogon::Post, drogon::Options);
  ADD_METHOD_TO(AlgorithmController::analytics, "/api/analytics", drogon::Get, drogon::Options);
  METHOD_LIST_END

  void health(const drogon::HttpRequestPtr& request, std::function<void(const drogon::HttpResponsePtr&)>&& callback) const;
  void sorting(const drogon::HttpRequestPtr& request, std::function<void(const drogon::HttpResponsePtr&)>&& callback, std::string algorithm) const;
  void searching(const drogon::HttpRequestPtr& request, std::function<void(const drogon::HttpResponsePtr&)>&& callback, std::string algorithm) const;
  void structures(const drogon::HttpRequestPtr& request, std::function<void(const drogon::HttpResponsePtr&)>&& callback, std::string algorithm) const;
  void graphs(const drogon::HttpRequestPtr& request, std::function<void(const drogon::HttpResponsePtr&)>&& callback, std::string algorithm) const;
  void analytics(const drogon::HttpRequestPtr& request, std::function<void(const drogon::HttpResponsePtr&)>&& callback) const;

 private:
  AlgorithmService service_;
};

}  // namespace studio
