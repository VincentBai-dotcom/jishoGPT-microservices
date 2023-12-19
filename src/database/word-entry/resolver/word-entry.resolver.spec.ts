import { Test, TestingModule } from '@nestjs/testing';
import { WordEntryResolver } from './word-entry.resolver';

describe('WordEntryResolver', () => {
  let resolver: WordEntryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordEntryResolver],
    }).compile();

    resolver = module.get<WordEntryResolver>(WordEntryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
