// package: dk.adamino.grpc.chat
// file: chat-service.proto

import * as chat_service_pb from "./chat-service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServiceSendChatMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof chat_service_pb.ChatMessage;
  readonly responseType: typeof chat_service_pb.ChatMessageFromServer;
};

type ChatServiceGetRandomChatMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_service_pb.GetRandomChatMessageRequest;
  readonly responseType: typeof chat_service_pb.GetRandomChatMessageResponse;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly SendChatMessage: ChatServiceSendChatMessage;
  static readonly GetRandomChatMessage: ChatServiceGetRandomChatMessage;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sendChatMessage(metadata?: grpc.Metadata): BidirectionalStream<chat_service_pb.ChatMessage, chat_service_pb.ChatMessageFromServer>;
  getRandomChatMessage(
    requestMessage: chat_service_pb.GetRandomChatMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_service_pb.GetRandomChatMessageResponse|null) => void
  ): UnaryResponse;
  getRandomChatMessage(
    requestMessage: chat_service_pb.GetRandomChatMessageRequest,
    callback: (error: ServiceError|null, responseMessage: chat_service_pb.GetRandomChatMessageResponse|null) => void
  ): UnaryResponse;
}

