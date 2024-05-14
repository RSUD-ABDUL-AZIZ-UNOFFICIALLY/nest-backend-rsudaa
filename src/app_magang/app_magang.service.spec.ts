import { Test, TestingModule } from '@nestjs/testing';
import { AppMagangService } from './app_magang.service';

describe('AppMagangService', () => {
  let service: AppMagangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppMagangService],
    }).compile();

    service = module.get<AppMagangService>(AppMagangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
