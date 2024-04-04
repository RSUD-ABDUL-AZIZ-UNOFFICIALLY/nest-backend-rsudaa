import { Body, Controller, FileTypeValidator, Get, Header, HttpStatus, MaxFileSizeValidator, Param, ParamData, ParseFilePipe, ParseFilePipeBuilder, Post, Query, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Response } from "express";
import { ActivityService } from './activity.service';
import { activity, user } from '@prisma/client';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { promises } from 'dns';
import * as mime from 'mime-types';
import { log } from 'console';
import { Auth } from 'src/cummon/auth.decorator';
import { WebResponse } from 'src/model/web.model';

@Controller('/api/activity')
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ) { }

    @Get()
    async getActivity(
        @Query('data') data?: any
    ): Promise<WebResponse<any>> {
        data = parseInt(data)
        return this.activityService.findAll(data)
    }

    @Get('/findone/:name')
    findOne(@Param('name') name: string) {
        return this.activityService.findOne(name)
    }

    @Post('/post')
    @UseInterceptors(FilesInterceptor('images'))
    async postActivity(
        @Auth() user: user,
        @Body('title') title: string,
        @Body('desc') desc?: string,
        @UploadedFiles(
            new ParseFilePipeBuilder()
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                    fileIsRequired: false
                }),
        ) images?: Array<Express.Multer.File>,
    ): Promise<any> {
        return await this.activityService.save(title, desc, images)
    }

    @Post('/update/:activityId')
    @UseInterceptors(FilesInterceptor('images'))
    async updateActivity(
        @Auth() user: user,
        @Param('activityId') activityId: string,
        @Body('title') title?: string,
        @Body('desc') desc?: string,
        @UploadedFiles(
            new ParseFilePipeBuilder()
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                    fileIsRequired: false
                }),
        ) images?: Array<Express.Multer.File>,
    ): Promise<any> {
        return await this.activityService.update(activityId, title, desc, images)
    }

    @Post('/delete/:activityId')
    async deleteActivity(
        @Auth() user: user,
        @Param('activityId') activityId: string,
    ): Promise<any> {
        return await this.activityService.delete(activityId)
    }
}
