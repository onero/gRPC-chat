
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:3000',
    package: 'dk.adamino.grpc.chat',
    protoPath: join(__dirname, './proto/chat-service.proto'),
  },
};
