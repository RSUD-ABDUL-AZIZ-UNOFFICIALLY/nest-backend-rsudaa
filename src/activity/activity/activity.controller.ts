import { Body, Controller, FileTypeValidator, Get, Header, HttpStatus, MaxFileSizeValidator, Param, ParseFilePipe, ParseFilePipeBuilder, Post, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Response } from "express";
import { ActivityService } from './activity.service';
import { activity } from '@prisma/client';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { promises } from 'dns';
import * as mime from 'mime-types';
import { log } from 'console';

@Controller('/api/activity')
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ) { }

    @Get()
    getActivity(): Promise<activity> {
        return this.activityService.findAll()
    }

    @Get('/findone/:name')
    findOne(@Param('name') name: string) {
        return this.activityService.findOne(name)
    }

    @Post('/post')
    @UseInterceptors(FilesInterceptor('images'))
    async postActivity(
        @Body('title') title: string,
        @Body('desc') desc?: string,
        @UploadedFiles(
            new ParseFilePipeBuilder()
                // .addFileTypeValidator({
                //     fileType: 'image/jpeg',
                // })
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                    fileIsRequired: false
                }),
        ) images?: Array<Express.Multer.File>,
    ): Promise<any> {
        if (images) {
            for (let i = 0; i < images.length; i++) {
                const mimeType = mime.lookup(images[i].originalname);
                if (!mimeType || !['image/jpeg', 'image/jpg', 'image/png'].includes(mimeType)) {
                    return {
                        status: 200,
                        message: 'post data failed',
                        error: 'files must have images extensions [jpg, jpeg, png]'
                    }
                }
            }
        }
        return await this.activityService.save(title, desc, images)
    }

    @Post('/update/:activityId')
    @UseInterceptors(FilesInterceptor('images'))
    async updateActivity(
        @Param('activityId') activityId: string,
        @Body('title') title?: string,
        @Body('desc') desc?: string,
        @UploadedFiles(
            new ParseFilePipeBuilder()
                .addFileTypeValidator({
                    fileType: 'image/jpeg',
                })
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                    fileIsRequired: false
                }),
        ) images?: Array<Express.Multer.File>,
    ): Promise<any> {
        if (images) {
            for (let i = 0; i < images.length; i++) {
                const mimeType = mime.lookup(images[i].originalname);
                if (!mimeType || !['image/jpeg', 'image/jpg', 'image/png'].includes(mimeType)) {
                    return {
                        status: 200,
                        message: 'post data failed',
                        error: 'files must have images extensions [jpg, jpeg, png]'
                    }
                }
            }
        }
        return await this.activityService.update(activityId, title, desc, images)
    }

    @Post('/delete/:activityId')
    async deleteActivity(
        @Param('activityId') activityId: string,
    ): Promise<any> {
        return await this.activityService.delete(activityId)
    }
}
