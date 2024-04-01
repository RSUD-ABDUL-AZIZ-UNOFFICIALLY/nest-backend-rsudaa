import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LokerService } from './loker.service';
import { loker, user } from '@prisma/client';
import { z } from "zod";
import { UUID } from 'crypto';
import { Auth } from 'src/cummon/auth.decorator';
@Controller('/api/loker')
export class LokerController {
    constructor(
        private lokerService: LokerService
    ) { }

    @Get()
    getAll(): Promise<loker | any> {
        return this.lokerService.findAll()
    }

    @Post('/post')
    post(
        @Body('name') name: string,
        @Body('desc') desc?: string,
        @Body('dateStart') dateStart?: z.ZodDate,
        @Body('dateEnd') dateEnd?: z.ZodDate
    ): Promise<loker | any> {
        return this.lokerService.post(name, desc, dateStart, dateEnd)
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
