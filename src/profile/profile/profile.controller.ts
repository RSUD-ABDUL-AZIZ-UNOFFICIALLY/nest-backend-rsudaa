import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { profile } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('/api/profile')
export class ProfileController {
    constructor(
        private profileService: ProfileService
    ) { }

    @Get()
    geAll() {
        return this.profileService.findAll()
    }

    @Get('/:name')
    findOne(@Param('name') name: string) {
        return this.profileService.findOne(name)
    }

    @Post('/post')
    @UseInterceptors(FilesInterceptor('images'))
    async postActivity(
        @Body('name') name: string,
        @Body('desc') desc?: string,
        @UploadedFiles(
            new ParseFilePipeBuilder()
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                    fileIsRequired: false
                }),
        ) images?: Array<Express.Multer.File>,
    ): Promise<profile | any> {
        return await this.profileService.save(name, desc, images)
    }

    @Post('/update/:dataName')
    @UseInterceptors(FilesInterceptor('images'))
    async updateActivity(
        @Param('dataName') dataName: string,
        @Body('name') name?: string,
        @Body('desc') desc?: string,
        @UploadedFiles(
            new ParseFilePipeBuilder()
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                    fileIsRequired: false
                }),
        ) images?: Array<Express.Multer.File>,
    ): Promise<any> {
        return await this.profileService.update(dataName, name, desc, images)
    }

    @Post('/delete/:name')
    async deleteActivity(
        @Param('name') name: string,
    ): Promise<any> {
        return await this.profileService.delete(name)
    }
}
