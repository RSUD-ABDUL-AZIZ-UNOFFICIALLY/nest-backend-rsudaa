import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { LokerService } from './loker.service';
import { loker, user } from '@prisma/client';
import { z } from "zod";
import { UUID } from 'crypto';
import { Auth } from 'src/cummon/auth.decorator';
import { LokerCreateRequest } from 'src/model/loker.model';
@Controller('/api/loker')
export class LokerController {
    constructor(
        private lokerService: LokerService
    ) { }

    @Get()
    getAll(
        @Query('id') id: string
    ): Promise<loker | any> {
        return this.lokerService.findAll(id)
    }

    @Post('/post')
    post(
        @Body() req: LokerCreateRequest
    ): Promise<loker | any> {
        return this.lokerService.post(req)
    }

    @Post('/update/:id')
    update(
        @Param('id') id: UUID,
        @Body('name') name?: string,
        @Body('desc') desc?: string,
        @Body('dateStart') dateStart?: z.ZodDate,
        @Body('dateEnd') dateEnd?: z.ZodDate
    ) {
        return this.lokerService.update(id, name, desc, dateStart, dateEnd)
    }

    @Post('/delete/:id')
    delete(
        @Auth() user: user,
        @Param('id') id: UUID
    ) {
        return this.lokerService.delete(id)
    }
}
