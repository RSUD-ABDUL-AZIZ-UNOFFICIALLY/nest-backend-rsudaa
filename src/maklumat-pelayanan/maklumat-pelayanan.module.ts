import { Module } from '@nestjs/common';
import { MaklumatPelayananService } from './maklumat-pelayanan.service';
import { MaklumatPelayananController } from './maklumat-pelayanan.controller';

@Module({
  providers: [MaklumatPelayananService],
  controllers: [MaklumatPelayananController]
})
export class MaklumatPelayananModule {}
