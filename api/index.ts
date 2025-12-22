import express from 'express';
import { createNestApp } from '../src/main';

const server = express();
let isInitialized = false;

async function bootstrap() {
  if (!isInitialized) {
    await createNestApp(server);
    isInitialized = true;
  }
}

export default async function handler(req, res) {
  await bootstrap();
  server(req, res);
}
