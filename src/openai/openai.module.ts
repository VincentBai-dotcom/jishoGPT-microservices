import { Module } from '@nestjs/common';
import { PromptService } from './service/prompt/prompt.service';
import { GenerationService } from './service/generation/generation.service';
import { OpenaiResolver } from './resolver/openai.resolver';
import { WordEntryModule } from 'src/database/word-entry/word-entry.module';

@Module({
  imports: [WordEntryModule],
  providers: [PromptService, GenerationService, OpenaiResolver],
})
export class OpenaiModule {}
