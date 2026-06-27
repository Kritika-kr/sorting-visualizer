#pragma once

#include <drogon/HttpFilter.h>

namespace studio {

class CorsFilter final : public drogon::HttpFilter<CorsFilter> {
 public:
  void doFilter(const drogon::HttpRequestPtr& request,
                drogon::FilterCallback&& callback,
                drogon::FilterChainCallback&& chainCallback) override;
};

}  // namespace studio
