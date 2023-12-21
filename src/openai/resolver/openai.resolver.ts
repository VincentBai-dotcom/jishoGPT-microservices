import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GenerationService } from '../service/generation/generation.service';
import { PromptService } from '../service/prompt/prompt.service';
import { GenerateWordContentResponse } from '../dto/generate-word-content-response';
import { GenerateWordContentInput } from '../dto/generate-word-content.input';

@Resolver()
export class OpenaiResolver {
  constructor(
    private readonly generationService: GenerationService,
    private readonly promptService: PromptService,
  ) {}

  @Mutation(() => GenerateWordContentResponse)
  generateWordContent(
    @Args('generateWordContentInput')
    generateWordContentInput: GenerateWordContentInput,
  ) {
    return {
      content: 'content',
      cost: 0,
    };
  }
}
