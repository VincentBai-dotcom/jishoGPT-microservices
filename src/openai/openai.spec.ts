import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiServiceController } from './openai.controller';

describe('OpenaiServiceController', () => {
  let controller: OpenaiServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenaiServiceController],
    }).compile();

    controller = module.get<OpenaiServiceController>(OpenaiServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
