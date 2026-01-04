import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS (open for frontend access)
  app.enableCors({
    origin: '*', // later replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // ✅ Replit / Cloud platforms use dynamic ports
  const port = process.env.PORT || 3000;

  // ✅ IMPORTANT: bind to all interfaces
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Backend running on port ${port}`);
}

bootstrap();
