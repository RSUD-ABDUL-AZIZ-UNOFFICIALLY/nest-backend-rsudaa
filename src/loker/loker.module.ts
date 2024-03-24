import { Module } from '@nestjs/common';
import { LokerController } from './loker/loker.controller';
import { LokerService } from './loker/loker.service';

@Module({
  controllers: [LokerController],
  providers: [LokerService]
})
export class LokerModule {}
