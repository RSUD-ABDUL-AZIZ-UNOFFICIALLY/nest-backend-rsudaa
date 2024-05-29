import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SocmedService } from './socmed.service';
import { socmed, user } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Url } from 'url';
import { Auth } from 'src/cummon/auth.decorator';

@Controller('/api/web-profile/socmed')
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
        @Auth() user: user,
        @Body('name') name: string,
        @Body('link') link: Url,
    ): Promise<socmed | any> {
        return await this.socmedService.save(name, link)
    }

    @Post('/update/:nameSocmed')
    async updateSocmed(
        @Auth() user: user,
        @Param('nameSocmed') nameSocmed: string,
        @Body('name') name?: string,
        @Body('link') link?: Url,
    ): Promise<socmed | any> {
        return await this.socmedService.update(nameSocmed, name, link)
    }
}
