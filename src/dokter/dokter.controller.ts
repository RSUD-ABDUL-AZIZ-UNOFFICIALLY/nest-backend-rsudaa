import { Controller, Get, Query } from '@nestjs/common';
import { WebResponse } from 'src/model/web.model';
import { DokterService } from './dokter.service';
import { string } from 'zod';

@Controller('/api/web-profile/dokter')
export class DokterController {
    constructor(
        private dokterService: DokterService
    ) { }

    @Get()
    async getDokter(
        @Query('data') data: any
    ): Promise<WebResponse<any>> {
        data = parseInt(data)
        return await this.dokterService.findAll(data)
    }
}
