import { Injectable } from '@nestjs/common';
import { maklumatPelayanan } from '@prisma/client';
import { randomUUID } from 'crypto';
import { maklumatPelayananRequest } from 'src/model/maklumatPelayanan';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { z } from 'zod';

const maklumatPelayananSchema = z.object({
    file: z.string().min(1).max(1000),
})


@Injectable()
export class MaklumatPelayananService {
    constructor(
        private prismaService: PrismaService,

    ) { }

    async getData(id?: string): Promise<WebResponse<maklumatPelayanan | maklumatPelayanan[]>> {
        let aplikasi: maklumatPelayanan | maklumatPelayanan[] = await this.prismaService.maklumatPelayanan.findMany({
            orderBy: { createdAt: 'desc' }
        })

        if (id) {
            aplikasi = await this.prismaService.maklumatPelayanan.findFirst({
                where: { id: id },
                orderBy: { createdAt: 'desc' }
            })

            if (!aplikasi) {
                return {
                    success: false,
                    message: `data with id ${id} not found`
                }
            }
        }

        return {
            success: true,
            message: `get data successfully`,
            data: aplikasi
        }
    }

    async postData(req: maklumatPelayananRequest): Promise<WebResponse<maklumatPelayanan>> {
        const { file } = req
        const id = randomUUID()

        const validate = maklumatPelayananSchema.parse({    
            file: file
        })


        const saveData = await this.prismaService.maklumatPelayanan.create({
            data: {
                id: id,
                file: validate.file
            }
        })

        return {
            success: true,
            message: `create data successfully`,
            data: saveData
        }
    }

    async updateData(id: string, req: maklumatPelayananRequest): Promise<WebResponse<maklumatPelayanan>> {
        let aplikasi = await this.prismaService.maklumatPelayanan.findUnique({
            where: { id: id }
        })

        if (!aplikasi) {
            return {
                success: false,
                message: `data with id ${name} not found`
            }
        }

        const validate = maklumatPelayananSchema.parse({
            file: req.file ? req.file : aplikasi.file
        })

        const updateData = await this.prismaService.maklumatPelayanan.update({
            where: { id: id },
            data: {
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
        const unique = await this.prismaService.maklumatPelayanan.findUnique({
            where: { id: id }
        })

        if (!unique) {
            return {
                success: false,
                message: `data with id ${id} not found`
            }
        }

        const deleteData = await this.prismaService.maklumatPelayanan.delete({
            where: { id: id }
        })

        console.log(deleteData);

        return {
            success: true,
            message: `delete data successfully`
        }
    }
}
