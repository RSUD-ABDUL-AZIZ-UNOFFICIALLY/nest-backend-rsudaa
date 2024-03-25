import { Test, TestingModule } from '@nestjs/testing';
import { AppLokerService } from './app_loker.service';

describe('AppLokerService', () => {
  let service: AppLokerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppLokerService],
    }).compile();

    service = module.get<AppLokerService>(AppLokerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
