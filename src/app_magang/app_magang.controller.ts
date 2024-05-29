import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppMagangService } from './app_magang.service';
import { applyLokerRequest, applyLokerResponse } from 'src/model/applyLoker.model';
import { WebResponse } from 'src/model/web.model';
import { UUID } from 'crypto';
import { applyMagangRequest } from 'src/model/applyMagang.model';

@Controller('/api/web-profile/app-magang')
export class AppMagangController {
    constructor(
        private appLokerService: AppMagangService
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
        @Body() req: applyMagangRequest,
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
