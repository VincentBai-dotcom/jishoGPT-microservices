import { HttpException, Injectable } from '@nestjs/common';
import { pricing } from './pricing';
import OpenAI from 'openai';
import { wordContentGenerationOptions } from './wordContentGenerationOptions';
import { Types } from 'mongoose';
import { PromptService } from '../prompt/prompt.service';
import { WordEntryService } from 'src/database/word-entry/service/word-entry.service';

@Injectable()
export class GenerationService {
  constructor(
    private readonly promptService: PromptService,
    private readonly wordEntryService: WordEntryService,
  ) {}

  private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  getGenerationCost(completion: OpenAI.Completions.Completion): number {
    const inputTokenNum = completion.usage?.prompt_tokens;
    const outputTokenNum = completion.usage?.completion_tokens;
    const model = completion.model;
    const { inputCost = 0, outputCost = 0 } = pricing[model];
    return (
      (inputTokenNum / 1000) * inputCost + (outputTokenNum / 1000) * outputCost
    );
  }

  getDefaultWordContentGenerationOptions(
    contentName: WordContentType,
  ): Record<'temperature' | 'max_tokens', number> {
    return wordContentGenerationOptions[contentName];
  }

  async sendGenerationRequest(generationOptions) {
    try {
      const completion =
        await this.openai.completions.create(generationOptions);

      return completion;
    } catch (err) {
      return undefined;
    }
  }

  async sendWordContentGenerationRequest(
    wordId: Types.ObjectId,
    wordContentType: WordContentType,
  ) {
    try {
      const systemPrompt = this.promptService.getSystemPrompt(wordContentType);
      const wordEntry = await this.wordEntryService.getWordEntryById(wordId);
      const userPrompt = this.promptService.getWordEntryDescriptor(
        wordEntry.word,
        wordEntry.pronunciation,
        wordEntry.definitions[0].definition.join(', '),
      );
      const messages = this.promptService.promptsFormater(
        [systemPrompt],
        [userPrompt],
      );
      const generationOptions = {
        ...this.getDefaultWordContentGenerationOptions(wordContentType),
        messages,
      };
      const completion = await this.sendGenerationRequest(generationOptions);
      return completion;
    } catch (err) {
      console.log(err);
      throw new HttpException(err, 400);
    }
  }
}
