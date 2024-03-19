import { Module } from '@nestjs/common';
import { SocmedController } from './socmed/socmed.controller';
import { SocmedService } from './socmed/socmed.service';

@Module({
  controllers: [SocmedController],
  providers: [SocmedService]
})
export class SocmedModule {}
