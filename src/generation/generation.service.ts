import { Injectable } from '@nestjs/common';
import { pricing } from './pricing';
import OpenAI from 'openai';
import { wordContentGenerationOptions } from './wordContentGenerationOptions';

@Injectable()
export class GenerationService {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  getGenerationCost(
    inputTokenNum: number,
    outputTokenNum: number,
    model: model,
  ): number {
    const { inputCost, outputCost } = pricing[model];
    return (
      (inputTokenNum / 1000) * inputCost + (outputTokenNum / 1000) * outputCost
    );
  }

  getWordContentGenerationOptions(contentName: wordContentName) {
    return wordContentGenerationOptions[contentName];
  }

  async sendWordContentGenerationRequest(generationOptions) {
    try {
      const completions =
        await this.openai.chat.completions.create(generationOptions);

      const inputTokenNum = completions.usage?.prompt_tokens;
      const outputTokenNum = completions.usage?.completion_tokens;
      const cost = this.getGenerationCost(
        inputTokenNum || 0,
        outputTokenNum || 0,
        generationOptions.model,
      );
      return { content: completions.choices[0].message.content || '', cost };
    } catch (err) {
      return undefined;
    }
  }
}
