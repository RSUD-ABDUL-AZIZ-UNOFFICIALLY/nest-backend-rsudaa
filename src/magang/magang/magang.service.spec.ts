import { Test, TestingModule } from '@nestjs/testing';
import { MagangService } from './magang.service';

describe('MagangService', () => {
  let service: MagangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagangService],
    }).compile();

    service = module.get<MagangService>(MagangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
