import { Observable } from 'rxjs';
import { ChatServiceClient } from 'src/proto/chat-service_pb_service';
import { Injectable } from '@angular/core';
import { GetRandomChatMessageRequest, GetRandomChatMessageResponse, ChatMessageFromServer, ChatMessage } from 'src/proto/chat-service_pb';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private javaClient: ChatServiceClient;
  private nestJsClient: ChatServiceClient;

  constructor() {
    this.javaClient = new ChatServiceClient('http://localhost:1337');
    this.nestJsClient = new ChatServiceClient('http://localhost:1338');
  }

  getRandomChatMessage(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.nestJsClient
        .getRandomChatMessage(new GetRandomChatMessageRequest(), null, (err, response: GetRandomChatMessageResponse) => {
          if (err) {
            reject(err);
          }
          resolve(response.getRandomChatMessage());
        });
    });
  }

  sendChatMessage(chatMessage: string): Observable<ChatMessageFromServer> {
    return new Observable(obs => {
      console.log('ChatService.sendChatMessage');
      const request = new ChatMessage();
      request.setSenderUsername('Adamino');
      request.setMessage(chatMessage);

      const stream = this.javaClient.sendChatMessage();
      stream.on('status', (status: any) => {
        console.log('ChatService.sendChatMessage.status', status);
      });
      stream.on('data', (message: ChatMessageFromServer) => {
        console.log('ChatService.sendChatMessage.data', message.toObject());
        obs.next(message);
      });
      stream.on('end', () => {
        console.log('ChatService.sendChatMessage.end');
        // obs.complete();
        // obs.error();
      });
      stream.write(request);
    });
  }
}
