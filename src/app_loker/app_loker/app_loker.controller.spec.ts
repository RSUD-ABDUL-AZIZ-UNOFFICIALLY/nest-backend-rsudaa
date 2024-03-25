import { Test, TestingModule } from '@nestjs/testing';
import { AppLokerController } from './app_loker.controller';

describe('AppLokerController', () => {
  let controller: AppLokerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppLokerController],
    }).compile();

    controller = module.get<AppLokerController>(AppLokerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
