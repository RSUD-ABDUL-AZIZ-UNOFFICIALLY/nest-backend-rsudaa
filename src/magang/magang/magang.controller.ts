import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { loker, user } from '@prisma/client';
import { z } from "zod";
import { UUID } from 'crypto';
import { Auth } from 'src/cummon/auth.decorator';
import { LokerCreateRequest } from 'src/model/loker.model';
import { MagangService } from './magang.service';
import { MagangCreateRequest } from 'src/model/magang.model';

@Controller('/api/magang')
export class MagangController {
    constructor(
        private magangService: MagangService
    ) { }

    @Get()
    getAll(
        @Query('id') id: string
    ): Promise<loker | any> {
        return this.magangService.findAll(id)
    }

    @Post('/post')
    post(
        @Auth() user: user,
        @Body() req: MagangCreateRequest
    ): Promise<loker | any> {
        return this.magangService.post(req)
    }

    @Post('/update/:id')
    update(
        @Auth() user: user,
        @Param('id') id: UUID,
        @Body('name') name?: string,
        @Body('desc') desc?: string,
        @Body('dateStart') dateStart?: z.ZodDate,
        @Body('dateEnd') dateEnd?: z.ZodDate
    ) {
        return this.magangService.update(id, name, desc, dateStart, dateEnd)
    }

    @Post('/delete/:id')
    delete(
        @Auth() user: user,
        @Param('id') id: UUID
    ) {
        return this.magangService.delete(id)
    }
}
