import { Module } from '@nestjs/common';
import { AnnouncementController } from './announcement/announcement.controller';
import { AnnouncementService } from './announcement/announcement.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AnnouncementController],
  providers: [AnnouncementService]
})
export class AnnouncementModule { }
