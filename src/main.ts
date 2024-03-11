import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as mongoose from 'mongoose';
import { FXService } from './fx/fx_pb'; 
import { join } from 'path'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up MongoDB connection
  const MONGO_URI = 'mongodb+srv://cucp_user:M5DZwX3ZHnqdyuat@cluster0.t6h0ryw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions );

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:5000',
      package: 'fx',
      protoPath: join(__dirname, 'fx/fx.proto'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3500);
}
bootstrap();
