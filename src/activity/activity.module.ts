import { Module } from '@nestjs/common';
import { ActivityController } from './activity/activity.controller';
import { ActivityService } from './activity/activity.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ActivityController],
  providers: [ActivityService]
})
export class ActivityModule { }
