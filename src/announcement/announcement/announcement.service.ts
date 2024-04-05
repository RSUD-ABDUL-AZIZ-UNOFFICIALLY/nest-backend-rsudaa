import { Injectable } from '@nestjs/common';
import { announcement } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { date, z } from "zod";
import * as mime from 'mime-types';

const AnnounceSchema = z.object({
    announcementID: z.string().uuid(),
    title: z.string(),
    desc: z.string().optional(),
});

@Injectable()
export class AnnouncementService {
    constructor(
        private prismaService: PrismaService,
    ) { }

    async findAll(data?: number): Promise<announcement | any> {
        try {
            let announcement = null

            if (data) {
                announcement = await this.prismaService.announcement.findMany({
                    take: data,
                    orderBy: {
                        createdAt: 'desc'
                    }
                })
            } else {
                announcement = await this.prismaService.announcement.findMany()
            }

            return {
                status: 200,
                message: 'get data successfully',
                data: {
                    announcement: announcement
                }
            }
        } catch (error) {
            return {
                status: 500,
                message: 'get data failed   ',
                error: error
            }
        }
    }

    async save(title: string, desc?: string, images?: Array<Express.Multer.File>): Promise<any> {
        try {
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    const mimeType = mime.lookup(images[i].originalname);
                    if (!mimeType || !['image/jpeg', 'image/jpg', 'image/png'].includes(mimeType)) {
                        return {
                            status: 200,
                            message: 'post data failed',
                            error: 'files must have images extensions [jpg, jpeg, png]'
                        }
                    }
                }
            }

            const announcementID = randomUUID()

            const validatedData = AnnounceSchema.parse(
                {
                    announcementID,
                    title,
                    desc
                }
            );

            let announcementImages = []
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    announcementImages.push(images[i].originalname)
                }
            }

            const newAnnouncement = await this.prismaService.announcement.create({
                data: {
                    announcementID: validatedData.announcementID,
                    title: validatedData.title,
                    desc: validatedData.desc,
                    images: announcementImages
                }
            });

            return {
                status: 200,
                message: 'create data announcement successfully',
                data: {
                    activity: newAnnouncement
                }
            }
        } catch (error) {
            return {
                status: 500,
                message: `create data failed`,
                error: error
            }
        }
    }

    async update(announcementID: string, title?: string, desc?: string, images?: Array<Express.Multer.File>): Promise<any> {
        try {
            const dataAnnnouncement = await this.prismaService.announcement.findUnique({
                where: {
                    announcementID: announcementID
                },
            });

            if (!dataAnnnouncement) {
                return {
                    status: 200,
                    message: 'post data failed',
                    error: `Announcement with ID "${announcementID}" not found`
                }
            }

            if (images) {
                for (let i = 0; i < images.length; i++) {
                    const mimeType = mime.lookup(images[i].originalname);
                    if (!mimeType || !['image/jpeg', 'image/jpg', 'image/png'].includes(mimeType)) {
                        return {
                            status: 200,
                            message: 'post data failed',
                            error: 'files must have images extensions [jpg, jpeg, png]'
                        }
                    }
                }
            }

            let announcementImages = []
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    announcementImages.push(images[i].originalname)
                }
            }
            const validatedData = AnnounceSchema.parse(
                {
                    announcementID: dataAnnnouncement.announcementID,
                    title: title ? title : dataAnnnouncement.title,
                    desc: desc ? desc : dataAnnnouncement.desc
                }
            );

            const updatedAnnouncement = await this.prismaService.announcement.update({
                where: { announcementID: announcementID },
                data: {
                    announcementID: dataAnnnouncement.announcementID,
                    title: title ? validatedData.title : dataAnnnouncement.title,
                    desc: desc ? validatedData.desc : dataAnnnouncement.desc,
                    images: images ? announcementImages : dataAnnnouncement.images
                }
            });

            return {
                status: 200,
                message: 'update data successfully',
                data: updatedAnnouncement
            }
        } catch (error) {
            return {
                status: 500,
                message: `update data failed`,
                error: error
            }
        }
    }

    async delete(announcementID: string): Promise<any> {
        try {
            const dataAnnnouncement = await this.prismaService.announcement.findUnique({
                where: {
                    announcementID: announcementID
                },
            });

            if (!dataAnnnouncement) {
                return {
                    status: 200,
                    message: 'delete data failed',
                    error: `Announcement with ID "${announcementID}" not found`
                }
            }

            const deleteAnnouncement = await this.prismaService.announcement.delete({
                where: {
                    announcementID: announcementID
                },
            });

            return {
                status: 200,
                message: 'delete data successfully',
                data: deleteAnnouncement
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
