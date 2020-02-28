import { Observable } from 'rxjs';
import { ChatServiceClient } from 'src/proto/chat-service_pb_service';
import { Injectable } from '@angular/core';
import { ChatMessage, ChatMessageFromServer } from 'src/proto/chat-service_pb';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private client: ChatServiceClient;

  constructor() {
    this.client = new ChatServiceClient('http://localhost:1337');
  }

  sendChatMessage(chatMessage: string): Observable<ChatMessageFromServer> {
    return new Observable(obs => {
      console.log('ChatService.sendChatMessage');
      const request = new ChatMessage();
      request.setSenderUsername('Adamino');
      request.setMessage(chatMessage);

      const stream = this.client.sendChatMessage();
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
