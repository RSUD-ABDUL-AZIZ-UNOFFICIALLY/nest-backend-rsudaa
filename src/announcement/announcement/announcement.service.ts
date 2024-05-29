import { Injectable } from '@nestjs/common';
import { announcement } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { date, z } from "zod";
import * as mime from 'mime-types';
import { WebResponse } from 'src/model/web.model';
import { pengumumanRequest } from 'src/model/pengumuman.model';
import { title } from 'process';

const AnnounceSchema = z.object({
    announcementID: z.string(),
    title: z.string(),
    desc: z.string().optional(),
    images: z.any().optional()
});

@Injectable()
export class AnnouncementService {
    constructor(
        private prismaService: PrismaService,
    ) { }

    async findAll(announcementID?: string): Promise<WebResponse<announcement>> {
        try {
            let announcement: announcement | announcement[] = await this.prismaService.announcement.findMany({
                orderBy: { createdAt: 'desc' }
            })

            if (announcementID) {
                announcement = await this.prismaService.announcement.findFirst({
                    where: { announcementID: announcementID },
                    orderBy: {
                        createdAt: 'desc'
                    }
                })
            }

            return {
                success: true,
                message: 'get data successfully',
                data: announcement
            }
        } catch (error) {
            return {
                success: false,
                message: 'get data failed   ',
                errors: error
            }
        }
    }

    async save(req: pengumumanRequest): Promise<WebResponse<announcement>> {
        try {
            const announcementID = randomUUID()

            const validate = AnnounceSchema.parse({
                announcementID: announcementID,
                title: req.title,
                desc: req.desc,
                images: req.images ? req.images : null
            })

            const save = await this.prismaService.announcement.create({
                data: {
                    announcementID: validate.announcementID,
                    title: validate.title,
                    desc: validate.desc,
                    images: validate.images
                }
            })

            return {
                success: true,
                message: 'create data successfully',
                data: save
            }
        } catch (error) {
            return {
                status: 500,
                message: `create data failed`,
                errors: error
            }
        }
    }

    async update(announcementID: string, req: pengumumanRequest): Promise<WebResponse<announcement>> {
        try {
            let announcement = await this.prismaService.announcement.findFirst({
                where: { announcementID: announcementID }
            })


            if (!announcement) {
                return {
                    success: false,
                    message: `announcement not found`
                }
            }

            const validate = AnnounceSchema.parse({
                announcementID: announcementID,
                title: req.title ? req.title : announcement.title,
                desc: req.desc ? req.desc : announcement.desc,
                images: req.images ? req.images : announcement.images
            })

            const update = await this.prismaService.announcement.update({
                where: { announcementID: announcementID },
                data: {
                    title: validate.title,
                    desc: validate.desc,
                    images: validate.images
                }
            })

            return {
                success: true,
                message: 'update data successfully',
                data: update
            }
        } catch (error) {
            return {
                status: 500,
                message: `update data failed`,
                errors: error
            }
        }
    }

    async delete(announcementID: string): Promise<WebResponse<any>> {
        try {
            const dataAnnnouncement = await this.prismaService.announcement.findUnique({
                where: {
                    announcementID: announcementID
                },
            });

            if (!dataAnnnouncement) {
                return {
                    success: false,
                    message: 'delete data failed',
                    errors: `Announcement with ID "${announcementID}" not found`
                }
            }

            const deleteAnnouncement = await this.prismaService.announcement.delete({
                where: {
                    announcementID: announcementID
                },
            });

            console.log(deleteAnnouncement);

            return {
                success: true,
                message: 'delete data successfully',
            }
        } catch (error) {
            return {
                success: false,
                message: `delete data failed`,
                errors: error
            }
        }
    }
}
