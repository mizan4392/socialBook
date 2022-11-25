import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { MongoExceptionFilter } from './errorHandler/mongoError.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('socailbook example')
    .setDescription('socailbook API description')
    .setVersion('1.0')
    .addTag('socailbook')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  const port = process.env.APP_PORT || 3333;
  await app.listen(port, () => {
    Logger.log('API Service listening at http://localhost:' + port);
  });
}
bootstrap();
