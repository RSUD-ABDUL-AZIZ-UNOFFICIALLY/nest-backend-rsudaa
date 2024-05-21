import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { laporanTahunan } from '@prisma/client';
import { laporanTahunanRequest, laporanTahunanResponse, laporanTahunanUpdateRequest } from 'src/model/laporanTahunan.model';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { z } from 'zod';

const createSchema = z.object({
    name: z.string().min(1).max(200),
    desc: z.string().optional()
})
const updateSchema = z.object({
    name: z.string().max(200).optional(),
    desc: z.string().optional()
})

@Injectable()
export class LaporanTahunanService {
    constructor(
        private prismaService: PrismaService,
        private configService: ConfigService
    ) { }

    async getLaporanTahunan(name?: string): Promise<WebResponse<laporanTahunan | laporanTahunan[]>> {
        let dataLaporanTahunan: laporanTahunan | laporanTahunan[] = await this.prismaService.laporanTahunan.findMany({
            include: { fileLaporanTahunan: true }
        })

        if (name) {
            dataLaporanTahunan = await this.prismaService.laporanTahunan.findFirst({
                where: { name: name },
                include: { fileLaporanTahunan: true }
            })
        }

        return {
            success: true,
            message: `get data successfully`,
            data: dataLaporanTahunan
        }
    }

    async createLaporanTahunan(req: laporanTahunanRequest): Promise<WebResponse<laporanTahunan>> {
        let { name, desc } = req


        const validation = createSchema.parse({
            name: name,
            desc: desc
        })

        let laporanTahunan = await this.prismaService.laporanTahunan.findUnique({
            where: { name: validation.name }
        })


        if (laporanTahunan) {
            return {
                success: false,
                message: `laporan tahunan with name ${name} has added please use other name`,
                errors: {
                    path: `name`,
                    message: `laporan tahunan with name ${name} has added please use other name`,
                }
            }
        }

        const createLaporanTahunan = await this.prismaService.laporanTahunan.create({
            data: {
                name: name,
                desc: desc
            }
        })

        return {
            success: true,
            message: `create data succesfully`,
            data: createLaporanTahunan
        }
    }

    async updateData(name: string, req: laporanTahunanUpdateRequest): Promise<WebResponse<laporanTahunan>> {
        let dataLaporanTahunan = await this.prismaService.laporanTahunan.findUnique({
            where: { name: name }
        })

        if (!dataLaporanTahunan) {
            return {
                success: false,
                message: `laporan tahunan not found`
            }
        }

        const validation = updateSchema.parse({
            name: req.name,
            desc: req.desc
        })


        const updateData = await this.prismaService.laporanTahunan.update({
            where: { name: dataLaporanTahunan.name },
            data: {
                name: validation.name,
                desc: validation.desc
            }
        })

        return {
            success: true,
            message: `update data successfully`,
            data: updateData
        }
    }

    async deleteData(name: string): Promise<WebResponse<any>> {
        let dataLaporanTahunan = await this.prismaService.laporanTahunan.findUnique({
            where: { name: name }
        })

        if (!dataLaporanTahunan) {
            return {
                success: false,
                message: `laporan tahunan with name ${name} has added please use other name`,
                data: {
                    path: 'name',
                    message: `laporan tahunan with name ${name} has added please use other name`
                }
            }
        }

        const deleteData = await this.prismaService.laporanTahunan.delete({
            where: { name: dataLaporanTahunan.name }
        })

        console.log(deleteData);

        return {
            success: true,
            message: `delete data successfully`
        }
    }
}
