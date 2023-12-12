import { Module } from '@nestjs/common';
import { GenerationModule } from './generation/generation.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [GenerationModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
