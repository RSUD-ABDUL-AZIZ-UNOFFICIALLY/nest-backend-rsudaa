import { Module } from '@nestjs/common';
import { PoliklinikController } from './poliklinik.controller';
import { PoliklinikService } from './poliklinik.service';

@Module({
  controllers: [PoliklinikController],
  providers: [PoliklinikService]
})
export class PoliklinikModule {}
