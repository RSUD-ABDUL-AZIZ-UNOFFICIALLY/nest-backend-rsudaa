import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DasarHukumService } from './dasar-hukum.service';
import { user } from '@prisma/client';
import { Auth } from 'src/cummon/auth.decorator';
import { dasarHukumRequest } from 'src/model/dasarHukum.model';

@Controller('/api/dasar-hukum')
export class DasarHukumController {
    constructor(
        private dasarHukumService: DasarHukumService
    ) { }

    @Get()
    async getData(
        @Query('id') id: string
    ) {
        return this.dasarHukumService.getData(id)
    }

    @Post()
    async create(
        @Auth() user: user,
        @Body() req: dasarHukumRequest
    ) {
        return this.dasarHukumService.postData(req)
    }

    @Put('/:id')
    async update(
        @Auth() user: user,
        @Param('id') id: string,
        @Body() req: dasarHukumRequest
    ) {
        return this.dasarHukumService.updateData(id, req)
    }

    @Delete('/:id')
    async delete(
        @Auth() user: user,
        @Param('id') id: string,
        @Body() req: dasarHukumRequest
    ) {
        return this.dasarHukumService.deleteData(id)
    }
}
