import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { LaporanTahunanService } from './laporan-tahunan.service';
import { WebResponse } from 'src/model/web.model';
import { laporanTahunan, user } from '@prisma/client';
import { laporanTahunanRequest, laporanTahunanUpdateRequest } from 'src/model/laporanTahunan.model';
import { Auth } from 'src/cummon/auth.decorator';

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

    @Post()
    async postData(
        @Auth() user: user,
        @Body() req: laporanTahunanRequest
    ): Promise<WebResponse<laporanTahunan>> {
        return this.laporanTahunanService.createLaporanTahunan(req)
    }

    @Put()
    async updateData(
        @Auth() user: user,
        @Query('name') name: string,
        @Body() req: laporanTahunanUpdateRequest
    ): Promise<WebResponse<laporanTahunan>> {
        return this.laporanTahunanService.updateData(name, req)
    }

    @Put()
    async deleteData(
        @Auth() user: user,
        @Body('name') name: string,
    ): Promise<WebResponse<laporanTahunan>> {
        return this.laporanTahunanService.deleteData(name)
    }
}
