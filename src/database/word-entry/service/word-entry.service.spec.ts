import { Test, TestingModule } from '@nestjs/testing';
import { WordEntryService } from './word-entry.service';

describe('WordEntryService', () => {
  let service: WordEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordEntryService],
    }).compile();

    service = module.get<WordEntryService>(WordEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
