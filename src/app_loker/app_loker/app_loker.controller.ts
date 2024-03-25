import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppLokerService } from './app_loker.service';
import { applicationLoker } from '@prisma/client';
import { UUID } from 'crypto';
import { FileFieldsInterceptor, FileInterceptor, NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('/api/app-loker')
export class AppLokerController {
    constructor(
        private appLokerService: AppLokerService
    ) { }

    @Get()
    getAll() {
        return this.appLokerService.findAll()
    }

    @Get('/findOne/:id')
    getUnique(
        @Param('id') id: UUID
    ) {
        return this.appLokerService.findOne(id)
    }

    @Post('/post')
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'fileResume' },
            { name: 'fileApply' },
        ]),
    )
    post(
        @Body('email') email: string,
        @Body('fullName') fullName: string,
        @Body('lokerId') lokerId: UUID,
        @Body('sekolah') sekolah: string,
        @Body('jurusan') jurusan: string,
        @Body('jenjang') jenjang: string,
        @Body('address') address: string,
        @UploadedFiles() files: {
            fileResume?: Array<Express.Multer.File>,
            fileApply?: Array<Express.Multer.File>
        }
    ) {

        return this.appLokerService.post(email, fullName, lokerId, sekolah, jurusan, jenjang, address, files)
    }
}
