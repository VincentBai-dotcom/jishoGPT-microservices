import { Module } from '@nestjs/common';
import { GenerationModule } from './generation/generation.module';
import { GenerationController } from './generation/generation.controller';

@Module({
  imports: [GenerationModule],
  controllers: [GenerationController],
  providers: [],
})
export class AppModule {}
