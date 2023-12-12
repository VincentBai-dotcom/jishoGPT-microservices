import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenaiServiceModule } from './openai-service/openai-service.module';

@Module({
  imports: [OpenaiServiceModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
