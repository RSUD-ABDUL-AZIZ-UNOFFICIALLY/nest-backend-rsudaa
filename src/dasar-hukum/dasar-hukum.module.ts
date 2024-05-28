import { Module } from '@nestjs/common';
import { DasarHukumService } from './dasar-hukum.service';
import { DasarHukumController } from './dasar-hukum.controller';

@Module({
  providers: [DasarHukumService],
  controllers: [DasarHukumController]
})
export class DasarHukumModule {}
