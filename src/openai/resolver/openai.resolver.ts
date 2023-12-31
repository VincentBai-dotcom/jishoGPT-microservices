import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GenerationService } from '../service/generation/generation.service';
import { PromptService } from '../service/prompt/prompt.service';
import { GenerateWordContentResponse } from '../dto/generate-word-content-response';
import { GenerateWordContentInput } from '../dto/generate-word-content.input';
import { BadRequestException } from '@nestjs/common';

@Resolver()
export class OpenaiResolver {
  constructor(
    private readonly generationService: GenerationService,
    private readonly promptService: PromptService,
  ) {}

  @Mutation(() => GenerateWordContentResponse)
  async generateWordContent(
    @Args('generateWordContentInput')
    generateWordContentInput: GenerateWordContentInput,
  ) {
    const { wordId, wordContentType } = generateWordContentInput;
    try {
      const completion =
        await this.generationService.sendWordContentGenerationRequest(
          wordId,
          wordContentType,
        );
      return completion.choices[0].message.content;
    } catch (err) {
      throw new BadRequestException();
    }
  }
}
