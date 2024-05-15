import { Test, TestingModule } from '@nestjs/testing';
import { FileLaporanTahunanService } from './file-laporan-tahunan.service';

describe('FileLaporanTahunanService', () => {
  let service: FileLaporanTahunanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileLaporanTahunanService],
    }).compile();

    service = module.get<FileLaporanTahunanService>(FileLaporanTahunanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
