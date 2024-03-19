import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { announcement } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as mime from 'mime-types';
import { UUID } from 'crypto';
import { ZodDate, ZodDateDef } from 'zod';

@Controller('/api/announcement')
export class AnnouncementController {
    constructor(
        private announcementService: AnnouncementService
    ) { }

    @Get()
    async getAnnounce(): Promise<announcement | any> {
        return this.announcementService.findAll()
    }

    @Post('/post')
    @UseInterceptors(FilesInterceptor('images'))
    async postAnnouncement(
        @Body('title') title: string,
        @Body('date') date: string,
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
        return await this.announcementService.save(title, desc, images)
    }

    @Post('/update/:announcementID')
    @UseInterceptors(FilesInterceptor('images'))
    async updateAnnouncement(
        @Param('announcementID') announcementID: UUID,
        @Body('title') title?: string,
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
        return await this.announcementService.update(announcementID, title, desc, images)
    }

    @Post('/delete/:announcementID')
    async deleteActivity(
        @Param('announcementID') announcementID: string,
    ): Promise<any> {
        return await this.announcementService.delete(announcementID)
    }
}
