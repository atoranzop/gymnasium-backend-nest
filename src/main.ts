import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Gymnasium API')
    .setDescription('Documentación generada automáticamente con Swagger')
    .setVersion('1.0')
    .addTag('users', 'Endpoints relacionados con el módulo de usuarios')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('Error al iniciar la aplicación: ', err);
  process.exit(1);
});
