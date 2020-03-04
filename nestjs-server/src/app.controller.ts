import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { GetRandomChatMessageResponse } from './interfaces/get-random-chat-message-response.interface';
import { GetRandomChatMessageRequest } from './interfaces/get-random-chat-message-response.interface copy';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @GrpcMethod('ChatService')
  async getRandomChatMessage(data: GetRandomChatMessageRequest, metadata: any): Promise<GetRandomChatMessageResponse> {
    console.log('Random message requested!');
    const joke = await this.appService.getRandomChuckNorrisJoke().toPromise();

    return {
      randomChatMessage: joke.data.value
    };
  }
}
