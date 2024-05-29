import { Body, Controller, Delete, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { announcement, user } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as mime from 'mime-types';
import { UUID } from 'crypto';
import { ZodDate, ZodDateDef } from 'zod';
import { Auth } from 'src/cummon/auth.decorator';
import { pengumumanRequest } from 'src/model/pengumuman.model';

@Controller('/api/web-profile/announcement')
export class AnnouncementController {
    constructor(
        private announcementService: AnnouncementService
    ) { }

    @Get()
    async getAnnounce(
        @Query('announcementID') announcementID?: string
    ): Promise<announcement | any> {
        return this.announcementService.findAll(announcementID)
    }

    @Post()
    async postAnnouncement(
        @Auth() user: user,
        @Body() req: pengumumanRequest,
    ): Promise<any> {
        return await this.announcementService.save(req)
    }

    @Put('/:announcementID')
    async updateAnnouncement(
        @Auth() user: user,
        @Param('announcementID') announcementID: string,
        @Body() req: pengumumanRequest,
    ): Promise<any> {
        return await this.announcementService.update(announcementID, req)
    }

    @Delete('/:announcementID')
    async deleteActivity(
        @Auth() user: user,
        @Param('announcementID') announcementID: string,
    ): Promise<any> {
        return await this.announcementService.delete(announcementID)
    }
}
