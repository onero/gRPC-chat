# gRPC Java microservice

## How To Build & Run

Run following command to generate sources from the .proto and to compile

```
mvn clean generate-sources compile
```

Then simply run the ChatServer either with your IDE or following command:

```
mvn exec:java -D exec.mainClass=dk.adamino.chat.ChatServer
```
