import { Test, TestingModule } from '@nestjs/testing';
import { FileLaporanTahunanController } from './file-laporan-tahunan.controller';

describe('FileLaporanTahunanController', () => {
  let controller: FileLaporanTahunanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileLaporanTahunanController],
    }).compile();

    controller = module.get<FileLaporanTahunanController>(FileLaporanTahunanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
