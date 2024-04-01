import { Module } from '@nestjs/common';
import { DokterController } from './dokter.controller';
import { DokterService } from './dokter.service';

@Module({
  controllers: [DokterController],
  providers: [DokterService]
})
export class DokterModule {}
