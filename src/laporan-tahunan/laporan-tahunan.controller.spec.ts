import { Test, TestingModule } from '@nestjs/testing';
import { LaporanTahunanController } from './laporan-tahunan.controller';

describe('LaporanTahunanController', () => {
  let controller: LaporanTahunanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaporanTahunanController],
    }).compile();

    controller = module.get<LaporanTahunanController>(LaporanTahunanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
