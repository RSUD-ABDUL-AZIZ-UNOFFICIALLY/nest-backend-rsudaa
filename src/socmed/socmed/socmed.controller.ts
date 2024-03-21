import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SocmedService } from './socmed.service';
import { socmed } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Url } from 'url';

@Controller('/api/socmed')
export class SocmedController {
    constructor(
        private socmedService: SocmedService
    ) { }

    @Get()
    async getSocmed(): Promise<socmed | any> {
        return this.socmedService.findAll()
    }

    @Post('/post')
    async postSocmed(
        @Body('name') name: string,
        @Body('link') link: Url,
    ): Promise<socmed | any> {
        return await this.socmedService.save(name, link)
    }

    @Post('/update/:nameSocmed')
    async updateSocmed(
        @Param('nameSocmed') nameSocmed: string,
        @Body('name') name?: string,
        @Body('link') link?: Url,
    ): Promise<socmed | any> {
        return await this.socmedService.update(nameSocmed, name, link)
    }
}
