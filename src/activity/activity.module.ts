import { Module } from '@nestjs/common';
import { ActivityController } from './activity/activity.controller';

@Module({
  controllers: [ActivityController]
})
export class ActivityModule { }
