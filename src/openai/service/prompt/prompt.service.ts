import { Injectable } from '@nestjs/common';
import { systemPrompts } from './systemPrompts';
@Injectable()
export class PromptService {
  getSystemPrompt(promptName: WordContentType): string {
    return systemPrompts[promptName];
  }

  getWordEntryDescriptor(
    word: string,
    pronunciation: string,
    definition: string,
  ): string {
    return `${word}, pronounced as ${pronunciation}, with definition \"${definition}\"`;
  }

  promptsFormater(systemPrompts: string[], userPrompts: string[]) {
    return [
      ...systemPrompts.map((systemPrompt) => {
        return {
          role: 'system',
          content: systemPrompt,
        };
      }),
      ...userPrompts.map((userPrompt) => {
        return {
          role: 'user',
          content: userPrompt,
        };
      }),
    ];
  }
}
