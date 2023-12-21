import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiResolver } from './openai.resolver';

describe('OpenaiResolver', () => {
  let resolver: OpenaiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenaiResolver],
    }).compile();

    resolver = module.get<OpenaiResolver>(OpenaiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
