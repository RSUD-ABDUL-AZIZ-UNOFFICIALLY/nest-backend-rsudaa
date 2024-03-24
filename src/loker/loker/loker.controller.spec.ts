import { Test, TestingModule } from '@nestjs/testing';
import { LokerController } from './loker.controller';

describe('LokerController', () => {
  let controller: LokerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LokerController],
    }).compile();

    controller = module.get<LokerController>(LokerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
