import { Module } from '@nestjs/common';
import { OpenaiServiceController } from './openai-service.controller';
import { PromptService } from './prompt/prompt.service';
import { GenerationService } from './generation/generation.service';

@Module({
  controllers: [OpenaiServiceController],
  providers: [PromptService, GenerationService],
})
export class OpenaiServiceModule {}
