#include <cstdlib>
#include <drogon/drogon.h>

int main()
{
    int port = 8080;

    if(const char* env = std::getenv("PORT"))
        port = std::stoi(env);

    drogon::app()
        .addListener("0.0.0.0", port)
        .setThreadNum(4)
        .enableSession(false)
        .run();
}