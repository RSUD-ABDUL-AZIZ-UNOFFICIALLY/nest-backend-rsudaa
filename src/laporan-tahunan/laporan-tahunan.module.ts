import { Module } from '@nestjs/common';
import { LaporanTahunanController } from './laporan-tahunan.controller';
import { LaporanTahunanService } from './laporan-tahunan.service';

@Module({
  controllers: [LaporanTahunanController],
  providers: [LaporanTahunanService]
})
export class LaporanTahunanModule {}
