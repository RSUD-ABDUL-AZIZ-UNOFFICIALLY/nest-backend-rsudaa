import { Controller, Get, Param, ParamData, Query } from '@nestjs/common';
import { PoliklinikService } from './poliklinik.service';
import { WebResponse } from 'src/model/web.model';

@Controller('/api/poliklinik')
export class PoliklinikController {
    constructor(
        private poliklinikService: PoliklinikService
    ) { }
    @Get()
    async getAll(): Promise<WebResponse<any>> {
        return await this.poliklinikService.findAll()
    }

    @Get('/detail')
    async getDetail(
        @Query('kd_poli') kd_poli: string
    ): Promise<WebResponse<any>> {
        return await this.poliklinikService.getDetail(kd_poli)
    }

    @Get('/detail/dokter')
    async getDetailPoliDokter(
        @Query('kd_poli') kd_poli: string
    ): Promise<WebResponse<any>> {
        return await this.poliklinikService.getDetailDokter(kd_poli)
    }
}
