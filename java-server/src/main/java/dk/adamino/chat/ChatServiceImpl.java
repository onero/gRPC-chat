package dk.adamino.chat;/*
 * Copyright 2017 Google, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import com.google.protobuf.Timestamp;
import dk.adamino.grpc.chat.ChatServiceGrpc;
import dk.adamino.grpc.chat.ChatServiceOuterClass;
import io.grpc.stub.StreamObserver;

import java.util.LinkedHashSet;

public class ChatServiceImpl extends ChatServiceGrpc.ChatServiceImplBase {

    private static LinkedHashSet<StreamObserver<ChatServiceOuterClass.ChatMessageFromServer>>
            observers = new LinkedHashSet<>();

    @Override
    public StreamObserver<ChatServiceOuterClass.ChatMessage> sendChatMessage(StreamObserver<ChatServiceOuterClass.ChatMessageFromServer> responseObserver) {
        // Add response observer to the list
        observers.add(responseObserver);

        // Handler for client messages
        return new StreamObserver<ChatServiceOuterClass.ChatMessage>() {

            @Override
            public void onNext(ChatServiceOuterClass.ChatMessage value) {

                System.out.println(value);

                // Create a server message from the client message
                Timestamp timestamp = Timestamp.newBuilder()
                        .setSeconds(System.currentTimeMillis())
                        .build();

                ChatServiceOuterClass.ChatMessageFromServer message = ChatServiceOuterClass.ChatMessageFromServer
                        .newBuilder()
                        .setMessage(value)
                        .setTimestamp(timestamp)
                        .build();

                // Notify all observers
                for (StreamObserver<ChatServiceOuterClass.ChatMessageFromServer> observer : observers) {
                    System.out.println("Sent message to: " + observer.toString());
                    observer.onNext(message);
                }
            }

            @Override
            public void onError(Throwable t) {
                t.getMessage();
                observers.remove(responseObserver);
            }

            @Override
            public void onCompleted() {
                System.out.println("Completed!");
//                responseObserver.onCompleted();
//                observers.remove(responseObserver);
            }
        };

    }
}
