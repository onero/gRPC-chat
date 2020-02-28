#
# Build stage
#
FROM maven:3.6.3-jdk-8-slim
COPY ./ ./
EXPOSE 9090
# RUN mvn clean generate-resources install
# ENTRYPOINT ["mvn", "exec:java -D exec.mainClass=dk.adamino.chat.ChatServer"]
# ENTRYPOINT ["java","-jar","/usr/local/lib/chat-server.jar"]