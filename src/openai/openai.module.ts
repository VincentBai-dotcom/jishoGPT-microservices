import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { PromptService } from './prompt/prompt.service';
import { GenerationService } from './generation/generation.service';

@Module({
  controllers: [OpenaiController],
  providers: [PromptService, GenerationService],
})
export class OpenaiModule {}
