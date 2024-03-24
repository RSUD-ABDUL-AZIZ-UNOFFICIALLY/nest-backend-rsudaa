import { Injectable } from '@nestjs/common';
import { loker } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ValidationService } from 'src/validation/validation/validation.service';
import { z } from "zod";

const lokerSchema = z.object({
    id: z.string(),
    name: z.string().max(100),
    desc: z.string().max(1000).optional(),
    dateStart: z.date().optional(),
    dateEnd: z.date().optional(),
})

@Injectable()
export class LokerService {
    constructor(
        private prismaService: PrismaService,
        private validation: ValidationService
    ) { }

    async findAll(): Promise<loker | any> {
        try {
            const data = await this.prismaService.findManyLoker()

            return {
                status: 200,
                message: 'get data successfully',
                data: data
            }
        } catch (error) {
            return {
                status: 500,
                message: 'get data failed',
                error: error
            }
        }
    }

    async post(
        name: string,
        desc?: string,
        dateStart?: z.ZodDate,
        dateEnd?: z.ZodDate
    ): Promise<loker | any> {
        try {
            const id = randomUUID()

            const validation = lokerSchema.parse({
                id, name, desc, dateStart, dateEnd
            })

            const createLoker = await this.prismaService.loker.create({
                data: {
                    id: validation.id,
                    name: validation.name,
                    desc: validation.desc,
                    dateStart: validation.dateStart,
                    dateEnd: validation.dateEnd
                }
            })

            return {
                status: 200,
                message: 'post data succesfully',
                data: createLoker
            }
        } catch (error) {
            return {
                status: 500,
                message: 'post data failed',
                error: error
            }
        }
    }


}