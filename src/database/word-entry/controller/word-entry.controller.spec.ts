import { Test, TestingModule } from '@nestjs/testing';
import { WordEntryController } from './word-entry.controller';

describe('WordEntryController', () => {
  let controller: WordEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordEntryController],
    }).compile();

    controller = module.get<WordEntryController>(WordEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
