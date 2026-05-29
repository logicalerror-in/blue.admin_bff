import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const DEFAULT_PORT = 12000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  const port = Number(process.env.ADMIN_BFF_PORT ?? DEFAULT_PORT);

  await app.listen(port, '0.0.0.0');
}

void bootstrap();