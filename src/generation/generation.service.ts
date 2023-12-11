import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerationService {
  getGenerationCost(
    inputTokenNum: number,
    outputTokenNum: number,
    model: model,
  ): number {}
}
