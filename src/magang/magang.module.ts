import { Module } from '@nestjs/common';
import { MagangController } from './magang/magang.controller';
import { MagangService } from './magang/magang.service';

@Module({
  controllers: [MagangController],
  providers: [MagangService]
})
export class MagangModule {}
