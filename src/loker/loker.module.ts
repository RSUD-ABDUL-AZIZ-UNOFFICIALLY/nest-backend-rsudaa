import { Module } from '@nestjs/common';
import { LokerController } from './loker/loker.controller';
import { LokerService } from './loker/loker.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LokerController],
  providers: [LokerService]
})
export class LokerModule { }
