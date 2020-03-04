import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  // await app.listen(3000);

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
}
bootstrap();
