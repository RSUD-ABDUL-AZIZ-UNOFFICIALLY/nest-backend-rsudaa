import { Module } from '@nestjs/common';
import { SocmedController } from './socmed/socmed.controller';
import { SocmedService } from './socmed/socmed.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SocmedController],
  providers: [SocmedService]
})
export class SocmedModule { }
