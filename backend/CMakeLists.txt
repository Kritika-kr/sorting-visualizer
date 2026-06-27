cmake_minimum_required(VERSION 3.20)
project(AlgorithmStudioBackend LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

find_package(Drogon CONFIG REQUIRED)

add_executable(algorithm_studio
  main.cpp
  controllers/AlgorithmController.cpp
  services/AlgorithmService.cpp
  services/algorithms/SortingAlgorithms.cpp
  services/algorithms/SearchingAlgorithms.cpp
  services/algorithms/StructureAlgorithms.cpp
  services/algorithms/GraphAlgorithms.cpp
  middleware/CorsFilter.cpp
  utils/JsonUtils.cpp
)

target_include_directories(algorithm_studio PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(algorithm_studio PRIVATE Drogon::Drogon)
