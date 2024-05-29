import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MaklumatPelayananService } from './maklumat-pelayanan.service';
import { Auth } from 'src/cummon/auth.decorator';
import { user } from '@prisma/client';
import { maklumatPelayananRequest } from 'src/model/maklumatPelayanan';

@Controller('/api/web-profile/maklumat-pelayanan')
export class MaklumatPelayananController {
    constructor(
        private maklumatPelayananService: MaklumatPelayananService
    ) { }

    @Get()
    async getData(
        @Query('id') id: string
    ) {
        return this.maklumatPelayananService.getData(id)
    }

    @Post()
    async create(
        @Auth() user: user,
        @Body() req: maklumatPelayananRequest
    ) {
        return this.maklumatPelayananService.postData(req)
    }

    @Put('/:id')
    async update(
        @Auth() user: user,
        @Param('id') id: string,
        @Body() req: maklumatPelayananRequest
    ) {
        return this.maklumatPelayananService.updateData(id, req)
    }

    @Delete('/:id')
    async delete(
        @Auth() user: user,
        @Param('id') id: string,
        @Body() req: maklumatPelayananRequest
    ) {
        return this.maklumatPelayananService.deleteData(id)
    }
}
