import { Controller, Get } from '@nestjs/common';
import { WebResponse } from 'src/model/web.model';
import { DokterService } from './dokter.service';

@Controller('/api/dokter')
export class DokterController {
    constructor(
        private dokterService: DokterService
    ) { }

    @Get()
    async getDokter(): Promise<WebResponse<any>> {
        return await this.dokterService.findAll()
    }
}
