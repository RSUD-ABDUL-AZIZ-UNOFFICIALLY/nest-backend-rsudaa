import { Injectable } from '@nestjs/common';
import { magang } from '@prisma/client';
import { randomUUID, UUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { z } from "zod";
import { WebResponse } from '../../model/web.model';
import { MagangCreateRequest } from 'src/model/magang.model';

const magangSchema = z.object({
    id: z.string(),
    name: z.string().max(100),
    desc: z.string().max(1000).optional(),
    dateStart: z.string().optional(),
    dateEnd: z.string().optional(),
})
@Injectable()
export class MagangService {
    constructor(
        private prismaService: PrismaService,
    ) { }

    async findAll(id?: string): Promise<WebResponse<magang | any>> {
        try {

            let data: magang[] | magang = await this.prismaService.magang.findMany(
                {
                    include: {
                        applicationMagang: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            )

            if (id) {
                data = await this.prismaService.magang.findFirst(
                    {
                        where: { id: id },
                        include: {
                            applicationMagang: true
                        },
                        orderBy: {
                            createdAt: 'desc'
                        }
                    }
                )
            }

            return {
                success: true,
                message: 'get data successfully',
                data: data
            }
        } catch (error) {
            return {
                success: false,
                message: 'get data failed',
                errors: error
            }
        }
    }

    async post(
        req: MagangCreateRequest
    ): Promise<magang | any> {
        try {
            const id = randomUUID()
            const { name, desc, dateEnd, dateStart } = req

            const validation = magangSchema.parse({
                id: id,
                name: name,
                desc: desc,
                dateStart: dateStart,
                dateEnd: dateEnd
            })

            console.log('val', validation);


            const createmagang = await this.prismaService.magang.create({
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
                data: createmagang
            }
        } catch (error) {
            return {
                status: 500,
                message: 'post data failed',
                error: error
            }
        }
    }

    async update(
        id: UUID,
        name?: string,
        desc?: string,
        dateStart?: z.ZodDate,
        dateEnd?: z.ZodDate
    ): Promise<magang | any> {
        try {
            const data = await this.prismaService.magang.findUnique({
                where: {
                    id: id
                }
            })

            if (!data) {
                return {
                    status: 200,
                    message: 'post data failed',
                    error: `data magang with id "${id}" not found`
                }
            }

            const validation = magangSchema.parse({
                id: id,
                name: name ? name : data.name,
                desc: desc,
                dateStart: dateStart,
                dateEnd: dateEnd
            })

            const updatemagang = await this.prismaService.magang.update({
                where: { id: id },
                data: {
                    name: validation.name,
                    desc: validation.desc,
                    dateStart: validation.dateStart,
                    dateEnd: validation.dateEnd
                }
            })

            return {
                status: 200,
                message: 'update data successfully',
                data: updatemagang
            }

        } catch (error) {
            return {
                status: 500,
                message: 'post data failed',
                error: error
            }
        }
    }

    async delete(id: UUID): Promise<magang | any> {
        try {
            const data = await this.prismaService.magang.findUnique({
                where: {
                    id: id
                }
            })

            if (!data) {
                return {
                    status: 200,
                    message: 'post data failed',
                    error: `data magang with id "${id}" not found`
                }
            }

            const deleteData = await this.prismaService.magang.delete({
                where: { id: id },
            })

            return {
                status: 200,
                message: `delete data magang with id "${id}" successfully`
            }
        } catch (error) {
            return {
                status: 500,
                message: `delete data failed`,
                error: error
            }
        }
    }
}
