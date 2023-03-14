import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(
    (() => {
      const env = process.env.NODE_ENV;

      if (env === 'production') {
        return 5000;
      }

      return 8000;
    })(),
  );
}

bootstrap();
