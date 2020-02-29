# gRPC Chat Full-Stack project

gRPC Chat Application With Java microservice, JavaFx Client and Angular web client with Envoy proxy

## The components are

- Angular 9
- Java Microservice Maven 4.0.x
- Protocol Buffers 3.2.x
- JavaFx 1.8
- Envoy Proxy 1.x

## How to run full project

To run the full project you can simply start all the required services, except for the JavaFx client with the docker-compose file.

Ensure you have Docker installed. For more info look [https://www.docker.com/](https://www.docker.com/)

Run server, Angular client & Web proxy

```
docker-compose up
```

## Services are located at

### Access the Backend:

[localhost:9090](http://localhost:9090/)

### Access Envoy Proxy

[localhost:1337](http://localhost:1337/)

### Access the Angular client

[localhost:4200](http://localhost:4200/)
