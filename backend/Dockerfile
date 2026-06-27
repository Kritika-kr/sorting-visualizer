FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    git \
    cmake \
    ninja-build \
    build-essential \
    pkg-config \
    curl \
    zip \
    unzip \
    tar \
    autoconf \
    automake \
    libtool \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN git clone https://github.com/microsoft/vcpkg.git

RUN ./vcpkg/bootstrap-vcpkg.sh

RUN cmake -B build \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_TOOLCHAIN_FILE=/app/vcpkg/scripts/buildsystems/vcpkg.cmake

RUN cmake --build build --config Release

EXPOSE 10000

CMD ["./build/algorithm_studio"]