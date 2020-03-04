# Envoy Web Proxy

Web proxy is needed in order for a web client to communicate with a gRPC service
Read more at [grpc.io](https://grpc.io/docs/tutorials/basic/web/)

## Deployent

The image is deployed on [Dockerhub](https://hub.docker.com/repository/docker/adamino/grpc-chat-web-proxy)

## How To Build & Run

Simply use the docker image to build and run the web proxy

## Accessing Envoy

The proxy is exposing port 1337 for the frontend and redirecting to localhost:9090, which is where the gRPC microservice is exposed.
