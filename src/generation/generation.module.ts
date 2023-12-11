import { Module } from '@nestjs/common';
import { PromptService } from 'src/prompt/prompt.service';
import { GenerationService } from './generation.service';
import { GenerationController } from './generation.controller';

@Module({
  imports: [GenerationModule],
  controllers: [GenerationController],
  providers: [PromptService, GenerationService],
})
export class GenerationModule {}
