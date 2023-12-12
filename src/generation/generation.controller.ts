import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { PromptService } from 'src/prompt/prompt.service';
import { GenerationService } from './generation.service';

@Controller('generation')
export class GenerationController {
  constructor(
    private generationSerivce: GenerationService,
    private promptService: PromptService,
  ) {}

  @Post('generateWordContent')
  async generateWordContent(
    @Body()
    body: {
      wordContentName: wordContentName;
      word: string;
      pronunciation: string;
      definition: string;
      model: model;
    },
  ) {
    const {
      wordContentName,
      word,
      pronunciation,
      definition,
      model = 'gpt-3.5-turbo-1106',
    } = body;
    console.log(wordContentName);
    const systemPrompt = this.promptService.getSystemPrompt(wordContentName);
    const userPrompt = this.promptService.getWordEntryDescriptor(
      word,
      pronunciation,
      definition,
    );
    const messages = this.promptService.promptsFormater(
      [systemPrompt],
      [userPrompt],
    );

    const generationOptions = {
      ...this.generationSerivce.getWordContentGenerationOptions(
        wordContentName,
      ),
      messages,
      model,
    };
    try {
      const { content, cost } =
        await this.generationSerivce.sendWordContentGenerationRequest(
          generationOptions,
        );

      return { content, cost };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
