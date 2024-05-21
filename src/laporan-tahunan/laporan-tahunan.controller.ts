import { Controller, Get, Query } from '@nestjs/common';
import { LaporanTahunanService } from './laporan-tahunan.service';
import { WebResponse } from 'src/model/web.model';
import { laporanTahunan } from '@prisma/client';

@Controller('/api/laporan-tahunan')
export class LaporanTahunanController {
    constructor(
        private laporanTahunanService: LaporanTahunanService
    ) { }

    @Get()
    async getData(
        @Query('name') name?: string
    ): Promise<WebResponse<laporanTahunan | laporanTahunan[]>> {
        return this.laporanTahunanService.getLaporanTahunan(name)
    }
}
