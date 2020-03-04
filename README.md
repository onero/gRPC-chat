# gRPC Chat Full-Stack project

gRPC Chat Application With Java microservice, JavaFx Client and Angular web client with Envoy proxy

## The components are

- Angular 9
- NestJS 6.10.x
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

### Access the Java Backend:

[localhost:9090](http://localhost:9090/)

### Access Java Envoy Proxy

[localhost:1337](http://localhost:1337/)

### Access the NestJs Backend:

[localhost:3000](http://localhost:3000/)

### Access NestJS Envoy Proxy

[localhost:1338](http://localhost:1338/)

### Access the Angular client

[localhost:4200](http://localhost:4200/)
