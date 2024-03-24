import { Body, Controller, Get, Post } from '@nestjs/common';
import { LokerService } from './loker.service';
import { loker } from '@prisma/client';
import { z } from "zod";
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
}
