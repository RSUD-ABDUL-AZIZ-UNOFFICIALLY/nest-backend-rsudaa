import { Body, Controller, Get, Header, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Response } from "express";
import { ActivityService } from './activity.service';
import { promises } from 'dns';
import { activity } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/api/activity')
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ) {}

    @Get()
    getActivity(): string {
        return 'this activity'
    }

    @Get('/findone/:name')
    findOne(@Param('name') name: string) {
        return this.activityService.findOne(name)
    }

    @Post('/post')
    @UseInterceptors(FileInterceptor('images'))
    async postActivity(
        @Body('title') title: string,
        @Body('desc') desc?: string,
        @UploadedFile() images?: any
    ): Promise<activity> {
        return await this.activityService.save(title, desc, images)
    }
}
