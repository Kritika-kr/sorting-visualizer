#include <drogon/drogon.h>

int main() {
  drogon::app()
      .addListener("0.0.0.0", 8080)
      .setThreadNum(4)
      .enableSession(false)
      .run();
}
