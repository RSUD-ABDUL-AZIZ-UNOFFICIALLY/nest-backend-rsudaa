import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { user } from '@prisma/client';
import { Auth } from 'src/cummon/auth.decorator';
import { activityRequest } from 'src/model/activity.model';

@Controller('/api/activity')
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ) { }

    @Get()
    async getActivity(
        @Query('activityID') activityID?: string
    ) {
        return this.activityService.findAll(activityID)
    }

    @Post()
    async postActivity(
        @Auth() user: user,
        @Body() req: activityRequest,
    ) {
        return await this.activityService.save(req)
    }

    @Put('/:activityID')
    async updateActivity(
        @Auth() user: user,
        @Param('activityID') activityID: string,
        @Body() req: activityRequest,
    ) {
        return await this.activityService.update(activityID, req)
    }

    @Delete('/:activityID')
    async deleteActivity(
        @Auth() user: user,
        @Param('activityID') activityID: string,
    ) {
        return await this.activityService.delete(activityID)
    }
}
