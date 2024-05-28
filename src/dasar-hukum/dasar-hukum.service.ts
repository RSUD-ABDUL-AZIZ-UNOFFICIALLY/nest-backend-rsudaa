import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { dasarHukum } from '@prisma/client';
import { randomUUID } from 'crypto';
import { dasarHukumRequest } from 'src/model/dasarHukum.model';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { z } from 'zod';

const dasarHukumSchema = z.object({
    name: z.string().min(1).max(250),
    file: z.string().min(1).max(1000).optional(),
})

@Injectable()
export class DasarHukumService {
    constructor(
        private prismaService: PrismaService,
        private configService: ConfigService
    ) { }

    async getData(id?: string): Promise<WebResponse<dasarHukum | dasarHukum[]>> {
        let aplikasi: dasarHukum | dasarHukum[] = await this.prismaService.dasarHukum.findMany({
            orderBy: { createdAt: 'desc' }
        })

        if (id) {
            aplikasi = await this.prismaService.dasarHukum.findFirst({
                where: { id: id },
                orderBy: { createdAt: 'desc' }
            })

            if (!aplikasi) {
                return {
                    success: false,
                    message: `data with id ${name} not found`
                }
            }
        }

        return {
            success: true,
            message: `get data successfully`,
            data: aplikasi
        }
    }

    async postData(req: dasarHukumRequest): Promise<WebResponse<dasarHukum>> {
        const { name, file } = req
        const id = randomUUID()

        const validate = dasarHukumSchema.parse({
            name: name,
            file: file
        })


        const saveData = await this.prismaService.dasarHukum.create({
            data: {
                id: id,
                name: validate.name,
                file: validate.file
            }
        })

        return {
            success: true,
            message: `create data successfully`,
            data: saveData
        }
    }

    async updateData(id: string, req: dasarHukumRequest): Promise<WebResponse<dasarHukum>> {
        let aplikasi = await this.prismaService.dasarHukum.findUnique({
            where: { id: id }
        })

        if (!aplikasi) {
            return {
                success: false,
                message: `data with id ${name} not found`
            }
        }

        const validate = dasarHukumSchema.parse({
            name: req.name ? req.name : aplikasi.name,
            file: req.file ? req.file : aplikasi.file
        })

        const updateData = await this.prismaService.dasarHukum.update({
            where: { id: id },
            data: {
                name: validate.name,
                file: validate.file
            }
        })

        return {
            success: true,
            message: `update data successfully`,
            data: updateData
        }
    }

    async deleteData(id: string): Promise<WebResponse<any>> {
        const unique = await this.prismaService.dasarHukum.findUnique({
            where: { id: id }
        })

        if (!unique) {
            return {
                success: false,
                message: `data with id ${id} not found`
            }
        }

        const deleteData = await this.prismaService.dasarHukum.delete({
            where: { id: id }
        })

        console.log(deleteData);

        return {
            success: true,
            message: `delete data successfully`
        }
    }
}
