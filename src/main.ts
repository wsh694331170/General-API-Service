// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import type { Express } from 'express';

export async function createNestApp(expressApp: Express) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    maxAge: 600,
  });

  const options = new DocumentBuilder()
    .setTitle('General-API')
    .setDescription('general api service')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  // Swagger 访问路径：https://xxx.vercel.app/api
  SwaggerModule.setup('api', app, document);

  await app.init(); // ⚠️ 必须是 init，不是 listen
}
