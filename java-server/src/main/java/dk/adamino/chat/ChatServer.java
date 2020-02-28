package dk.adamino.chat;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import java.io.IOException;

public class ChatServer {
    private static final int SERVER_PORT = 9090;

    public static void main(String[] args) throws InterruptedException, IOException {

        // Build server
        Server server = ServerBuilder.forPort(SERVER_PORT)
                .addService(new ChatServiceImpl())
                .build();

        // Start server
        System.out.println("Starting server on port " + SERVER_PORT);
        server.start();

        // Keep it running
        System.out.println("Server started!");
        server.awaitTermination();
    }

}
