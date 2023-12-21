import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { PromptService } from './service/prompt/prompt.service';
import { GenerationService } from './service/generation/generation.service';
import { OpenaiResolver } from './resolver/openai.resolver';

@Module({
  controllers: [OpenaiController],
  providers: [PromptService, GenerationService, OpenaiResolver],
})
export class OpenaiModule {}
