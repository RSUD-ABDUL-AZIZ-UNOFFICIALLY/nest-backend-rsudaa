import { Test, TestingModule } from '@nestjs/testing';
import { MagangController } from './magang.controller';

describe('MagangController', () => {
  let controller: MagangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MagangController],
    }).compile();

    controller = module.get<MagangController>(MagangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
