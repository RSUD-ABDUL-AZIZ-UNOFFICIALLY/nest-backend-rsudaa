import { Test, TestingModule } from '@nestjs/testing';
import { AppMagangController } from './app_magang.controller';

describe('AppMagangController', () => {
  let controller: AppMagangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppMagangController],
    }).compile();

    controller = module.get<AppMagangController>(AppMagangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
