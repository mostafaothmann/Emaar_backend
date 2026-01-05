import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverless from 'serverless-http';
import express from 'express';

const expressApp = express();
let cachedServer: any;

async function bootstrapServer() {
  if (!cachedServer) {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
      { bufferLogs: true }
    );

    app.enableCors({
      origin: '*',
    });

    await app.init();
    cachedServer = serverless(expressApp);
  }

  return cachedServer;
}

// 👇 THIS EXPORT IS MANDATORY
export const handler = async (event: any, context: any) => {
  const server = await bootstrapServer();
  return server(event, context);
};
