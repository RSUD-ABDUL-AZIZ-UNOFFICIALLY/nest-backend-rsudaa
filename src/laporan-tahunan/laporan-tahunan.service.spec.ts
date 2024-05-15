import { Test, TestingModule } from '@nestjs/testing';
import { LaporanTahunanService } from './laporan-tahunan.service';

describe('LaporanTahunanService', () => {
  let service: LaporanTahunanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaporanTahunanService],
    }).compile();

    service = module.get<LaporanTahunanService>(LaporanTahunanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
