# gRPC Angular Client

This is a web client for the microservice, which communicates with the service via the Envoy proxy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Deployment

The image is deployed on [Dockerhub](https://hub.docker.com/repository/docker/adamino/grpc-chat-angular-client)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Protobuf generation
In order to build the models and gRPC Service, simply run `npm run proto`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
