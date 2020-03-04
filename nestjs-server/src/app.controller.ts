import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { GetRandomChatMessageResponse } from './interfaces/get-random-chat-message-response.interface';
import { GetRandomChatMessageRequest } from './interfaces/get-random-chat-message-response.interface copy';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('Incoming hello...');

    return this.appService.getHello();
  }

  @GrpcMethod('ChatService')
  getRandomChatMessage(data: GetRandomChatMessageRequest, metadata: any): GetRandomChatMessageResponse {
    console.log('Random message requested!');

    return {
      randomChatMessage: 'Yes!'
    };
  }
}
