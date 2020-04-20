import 'dotenv/config';
//require('dotenv').config()

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
   // origin: [
      // 'http://192.168.1.4:4200', // angular
      //'http://localhost:4200', // angular
      // 'http://localhost:3000', // react
      // 'http://localhost:8081', // react-native
    //],
  }); 
  
  const port = process.env.SERVER_PORT;

  await app.listen(port,()=>console.log(`TPCatalog listening on port ${port}`));
}
bootstrap();
