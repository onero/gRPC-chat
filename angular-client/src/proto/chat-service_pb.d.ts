// package: dk.adamino.grpc.chat
// file: chat-service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ChatMessage extends jspb.Message {
  getSenderUsername(): string;
  setSenderUsername(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    senderUsername: string,
    message: string,
  }
}

export class ChatMessageFromServer extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasChatMessage(): boolean;
  clearChatMessage(): void;
  getChatMessage(): ChatMessage | undefined;
  setChatMessage(value?: ChatMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageFromServer.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageFromServer): ChatMessageFromServer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatMessageFromServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageFromServer;
  static deserializeBinaryFromReader(message: ChatMessageFromServer, reader: jspb.BinaryReader): ChatMessageFromServer;
}

export namespace ChatMessageFromServer {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    chatMessage?: ChatMessage.AsObject,
  }
}

export class GetRandomChatMessageRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRandomChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRandomChatMessageRequest): GetRandomChatMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRandomChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRandomChatMessageRequest;
  static deserializeBinaryFromReader(message: GetRandomChatMessageRequest, reader: jspb.BinaryReader): GetRandomChatMessageRequest;
}

export namespace GetRandomChatMessageRequest {
  export type AsObject = {
  }
}

export class GetRandomChatMessageResponse extends jspb.Message {
  getRandomChatMessage(): string;
  setRandomChatMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRandomChatMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRandomChatMessageResponse): GetRandomChatMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRandomChatMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRandomChatMessageResponse;
  static deserializeBinaryFromReader(message: GetRandomChatMessageResponse, reader: jspb.BinaryReader): GetRandomChatMessageResponse;
}

export namespace GetRandomChatMessageResponse {
  export type AsObject = {
    randomChatMessage: string,
  }
}

