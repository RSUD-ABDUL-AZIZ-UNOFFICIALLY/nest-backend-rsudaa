import { Module } from '@nestjs/common';
import { FileLaporanTahunanController } from './file-laporan-tahunan.controller';
import { FileLaporanTahunanService } from './file-laporan-tahunan.service';

@Module({
  controllers: [FileLaporanTahunanController],
  providers: [FileLaporanTahunanService]
})
export class FileLaporanTahunanModule {}
