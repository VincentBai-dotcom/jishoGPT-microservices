import { Injectable } from '@nestjs/common';
import { systemPrompts } from './systemPrompts';
@Injectable()
export class PromptService {
  getSystemPrompt(promptName: generatedContentName): string {
    return systemPrompts[promptName];
  }

  getWordEntryDescriptor(
    word: string,
    pronunciation: string,
    definition: string,
  ): string {
    return `${word}, pronounced as ${pronunciation}, with definition \"${definition}\"`;
  }
}
