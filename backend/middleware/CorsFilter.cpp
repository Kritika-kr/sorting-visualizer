#include "middleware/CorsFilter.h"

namespace studio {

void CorsFilter::doFilter(const drogon::HttpRequestPtr& request,
                          drogon::FilterCallback&& callback,
                          drogon::FilterChainCallback&& chainCallback) {
  if (request->method() == drogon::Options) {
    auto response = drogon::HttpResponse::newHttpResponse();
    response->addHeader("Access-Control-Allow-Origin", "*");
    response->addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response->addHeader("Access-Control-Allow-Headers", "Content-Type");
    callback(response);
    return;
  }
  chainCallback();
}

}  // namespace studio
