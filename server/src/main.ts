import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MongoExceptionFilter } from './errorHandler/mongoError.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new MongoExceptionFilter());
  const port = process.env.APP_PORT || 3333;
  await app.listen(port, () => {
    Logger.log('API Service listening at http://localhost:' + port);
  });
}
bootstrap();
