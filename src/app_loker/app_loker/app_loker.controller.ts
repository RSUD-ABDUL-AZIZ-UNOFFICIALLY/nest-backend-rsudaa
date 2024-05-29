import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppLokerService } from './app_loker.service';
import { applicationLoker, user } from '@prisma/client';
import { UUID } from 'crypto';
import { FileFieldsInterceptor, FileInterceptor, NoFilesInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/cummon/auth.decorator';
import { applyLokerRequest, applyLokerResponse } from 'src/model/applyLoker.model';
import { WebResponse } from 'src/model/web.model';

@Controller('/api/web-profile/app-loker')
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
    // @UseInterceptors(FileFieldsInterceptor([
    //     { name: 'fileResume', maxCount: 1 },
    //     { name: 'fileApply', maxCount: 1 },
    //     { name: 'fileOther', maxCount: 1 },
    // ]))
    post(
        @Body() req: applyLokerRequest,
        // @UploadedFiles(
        //     new ParseFilePipeBuilder()
        //         .build({
        //             errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        //             fileIsRequired: false
        //         }),
        // ) files?: {
        //     fileResume?: Array<Express.Multer.File>,
        //     fileApply?: Array<Express.Multer.File>,
        //     fileOther?: Array<Express.Multer.File>,
        // }
    ): Promise<WebResponse<applyLokerResponse>> {

        return this.appLokerService.post(req)
    }
}
