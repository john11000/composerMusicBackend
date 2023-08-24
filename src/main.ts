import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import fmp from '@fastify/multipart';
import helmet from 'helmet';

import { Environments } from './core/interfaces';
import { AppModule } from './app.module';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter({
    logger: false,
  });

  fastifyAdapter.register(fmp, {
    limits: {
      fieldNameSize: 1000, // Max field name size in bytes
      fieldSize: 100, // Max field value size in bytes
      fields: 10, // Max number of non-file fields
      fileSize: 20971520, //20971520 = 20MB,  For multipart forms, the max file size
      files: 1, // Max number of file fields
      headerPairs: 200, // Max number of header key=>value pairs
    },
  });

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);

  app.use(
    helmet({
      contentSecurityPolicy: process.env.NODE_ENV === Environments.PRODUCTION ? true : false,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('Proyecto base')
    .setDescription('Proyecto base API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  app.enableCors();

  await app.listen(3080, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
