import { Injectable } from '@nestjs/common';
import { applicationLoker } from '@prisma/client';
import { randomUUID, UUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ValidationService } from 'src/validation/validation/validation.service';
import { z } from 'zod';
import * as mime from 'mime-types';
import { error } from 'console';
const appSchema = z.object({
    id: z.string(),
    email: z.string(),
    fullName: z.string(),
    lokerId: z.string(),
    sekolah: z.string(),
    jurusan: z.string(),
    jenjang: z.string(),
    address: z.string(),
    fileResume: z.any(),
    fileApply: z.any()
})

@Injectable()
export class AppLokerService {
    constructor(
        private prismaService: PrismaService,
        private validation: ValidationService
    ) { }

    async findAll() {
        try {
            const data = await this.prismaService.applicationLoker.findMany()

            return {
                status: 200,
                message: 'get data succesfully',
                data: {
                    application: data
                }
            }
        } catch (error) {
            return {
                status: 500,
                message: 'get data failed',
                error: error
            }
        }
    }

    async findOne(
        id: UUID
    ): Promise<applicationLoker | any> {
        try {
            const data = await this.prismaService.applicationLoker.findUnique({
                where: { id: id },
                include: {
                    loker: true
                }
            })

            return {
                status: 200,
                message: 'get data successfully',
                data: {
                    data: data
                }
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
        email: string,
        fullName: string,
        lokerId: UUID,
        sekolah: string,
        jurusan: string,
        jenjang: string,
        address: string,
        files: {
            fileResume?: Array<Express.Multer.File>,
            fileApply?: Array<Express.Multer.File>
        }

    ): Promise<applicationLoker | any> {
        try {
            const id = randomUUID()
            let fileResume: string
            let fileApply: string

            if (files) {
                if (files.fileResume[0]) {
                    const mimeTypeFileResume = mime.lookup(files.fileResume[0].originalname)
                    if (!mimeTypeFileResume || !['application/pdf'].includes(mimeTypeFileResume)) {
                        return {
                            status: 200,
                            message: 'post data failed',
                            error: {
                                path: 'fileResume',
                                message: 'File must be either a PDF'
                            }
                        }

                    }
                }

                if (files.fileApply[0]) {
                    const mimeTypeFileApply = mime.lookup(files.fileApply[0].originalname)
                    if (!mimeTypeFileApply || !['application/pdf'].includes(mimeTypeFileApply)) {
                        return {
                            status: 200,
                            message: 'post data failed',
                            error: {
                                path: 'fileApply',
                                message: 'File must be either a PDF'
                            }
                        }

                    }
                }
            }

            if (files) {
                fileResume = files.fileResume[0].originalname
                fileApply = files.fileApply[0].originalname
            }

            const validation = appSchema.parse({
                id, email, fullName, lokerId, sekolah, jurusan, jenjang, address, fileResume, fileApply
            })


            const dataLoker = await this.prismaService.loker.findUnique({
                where: { id: validation.lokerId },
                include: {
                    applicationLoker: {
                        where: {
                            email: validation.email
                        }
                    }
                }
            })

            if (!dataLoker) {
                return {
                    status: 500,
                    message: `post data failed`,
                    error: `data loker not found, please select loker`
                }
            } else {
                if (dataLoker.applicationLoker.length > 0) {
                    return {
                        status: 500,
                        message: `post data failed`,
                        error: {
                            path: `email`,
                            message: `${validation.email} has applied loker ${dataLoker.name}`
                        }
                    }
                }
            }


            const create = await this.prismaService.applicationLoker.create({
                data: {
                    id: validation.id,
                    email: validation.email,
                    fullName: validation.fullName,
                    lokerId: validation.lokerId,
                    sekolah: validation.sekolah,
                    jurusan: validation.jurusan,
                    jenjang: validation.jenjang,
                    address: validation.address,
                    fileResume: validation.fileResume,
                    fileApply: validation.fileApply
                }
            })
            return {
                status: 200,
                message: 'post data successfully',
                data: create
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
