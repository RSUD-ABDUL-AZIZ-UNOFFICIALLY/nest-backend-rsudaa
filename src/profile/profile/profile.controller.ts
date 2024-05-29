import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { profile, user } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/cummon/auth.decorator';

@Controller('/api/web-profile/profile')
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
        @Auth() user: user,
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
    async updateActivity(
        @Auth() user: user,
        @Param('dataName') dataName: string,
        @Body('name') name?: string,
        @Body('desc') desc?: string,
    ): Promise<any> {
        return await this.profileService.update(dataName, name, desc)
    }

    @Post('/delete/:name')
    async deleteActivity(
        @Auth() user: user,
        @Param('name') name: string,
    ): Promise<any> {
        return await this.profileService.delete(name)
    }
}
