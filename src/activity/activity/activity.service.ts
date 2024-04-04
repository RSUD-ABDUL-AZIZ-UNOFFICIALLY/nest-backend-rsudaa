import { Injectable, NotFoundException, ParamData } from '@nestjs/common';
import { activity } from '@prisma/client';
import { randomUUID } from 'crypto';
import { z } from "zod";
import * as mime from 'mime-types';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
const ActivitySchema = z.object({
    activityId: z.string().uuid(),
    title: z.string(),
    desc: z.string().optional(),
});

@Injectable()
export class ActivityService {
    constructor(
        private prismaService: PrismaService,
    ) { }

    async findAll(data?: number): Promise<activity | any> {
        try {
            let activity = null
            if (data) {
                activity = await this.prismaService.activity.findMany({
                    take: data,
                })
            } else {
                activity = await this.prismaService.activity.findMany()
            }

            return {
                status: 200,
                message: 'get data successfully',
                data: {
                    activity: activity
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
    async findAllPagination(page: number): Promise<activity | any> {
        try {
            const activity = await this.prismaService.activity.findMany({
                take: 2,
            })

            return {
                status: 200,
                message: 'get data successfully',
                data: {
                    activity: activity
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

    findOne(name: string) {
        try {


        } catch (error) {
            return {
                status: false,
                message: 'error',
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

            const activityId = randomUUID()

            const validatedData = ActivitySchema.parse(
                {
                    activityId,
                    title,
                    desc
                });

            let activityImages = []
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    activityImages.push(images[i].originalname)
                }
            }

            const newActivity = await this.prismaService.activity.create({
                data: {
                    activityID: validatedData.activityId,
                    title: validatedData.title,
                    desc: validatedData.desc,
                    images: activityImages
                }
            });

            return {
                status: 200,
                message: 'create data activity successfully',
                data: {
                    activity: newActivity
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

    async update(activityId: string, title?: string, desc?: string, images?: Array<Express.Multer.File>): Promise<any> {
        try {
            const dataActivity = await this.prismaService.activity.findUnique({
                where: {
                    activityID: activityId
                },
            });

            if (!dataActivity) {
                return {
                    status: 200,
                    message: 'post data failed',
                    error: `Activiry with ID "${activityId}" not found`
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

            let activityImages = []
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    activityImages.push(images[i].originalname)
                }
            }
            const validatedData = ActivitySchema.parse({ activityId, title, desc });

            const updatedActivity = await this.prismaService.activity.update({
                where: { activityID: activityId },
                data: {
                    activityID: dataActivity.activityID,
                    title: title ? validatedData.title : dataActivity.title,
                    desc: desc ? validatedData.desc : dataActivity.desc,
                    images: images ? activityImages : dataActivity.images
                }
            });

            return {
                status: 200,
                message: 'update data successfully',
                data: updatedActivity
            }
        } catch (error) {
            return {
                status: 500,
                message: `update data failed`,
                error: error
            }
        }
    }
    async delete(activityId: string): Promise<any> {
        try {
            const dataActivity = await this.prismaService.activity.findUnique({
                where: {
                    activityID: activityId
                },
            });

            if (!dataActivity) {
                return {
                    status: 200,
                    message: 'delete data failed',
                    error: `Activiry with ID "${activityId}" not found`
                }
            }

            const deleteActivity = await this.prismaService.activity.delete({
                where: {
                    activityID: activityId
                },
            });

            return {
                status: 200,
                message: 'delete data successfully',
                data: deleteActivity
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
