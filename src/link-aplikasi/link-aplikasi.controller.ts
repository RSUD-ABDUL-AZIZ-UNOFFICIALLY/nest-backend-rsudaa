import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LinkAplikasiService } from './link-aplikasi.service';
import { aplikasiRequest } from 'src/model/aplikasi.model';
import { Auth } from 'src/cummon/auth.decorator';
import { user } from '@prisma/client';

@Controller('/api/link-aplikasi')
export class LinkAplikasiController {
    constructor(
        private linkAplikasiService: LinkAplikasiService
    ) { }

    @Get()
    async getData(
        @Query('id') id: string
    ) {
        return this.linkAplikasiService.getData(id)
    }

    @Post()
    async create(
        @Auth() user: user,
        @Body() req: aplikasiRequest
    ) {
        return this.linkAplikasiService.postData(req)
    }

    @Put('/:id')
    async update(
        @Auth() user: user,
        @Param('id') id: string,
        @Body() req: aplikasiRequest
    ) {
        return this.linkAplikasiService.updateData(id, req)
    }

    @Delete('/:id')
    async delete(
        @Auth() user: user,
        @Param('id') id: string,
        @Body() req: aplikasiRequest
    ) {
        return this.linkAplikasiService.deleteData  (id)
    }
}
