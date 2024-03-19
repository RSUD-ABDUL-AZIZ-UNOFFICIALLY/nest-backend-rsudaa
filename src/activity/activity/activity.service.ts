import { Injectable, NotFoundException } from '@nestjs/common';
import { activity } from '@prisma/client';
import { error } from 'console';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ValidationService } from 'src/validation/validation/validation.service';
import { z } from "zod";

const ActivitySchema = z.object({
    activityId: z.string().uuid(),
    title: z.string(),
    desc: z.string().optional(),
});

@Injectable()
export class ActivityService {
    constructor(
        private prismaService: PrismaService,
        private validation: ValidationService,
    ) { }

    async findAll(): Promise<activity | any> {
        try {
            const activity = await this.prismaService.findMany()

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
            const schema = z.string().min(8).max(100)
            const Result = this.validation.validate(schema, name)

            return {
                status: 200,
                message: `hello ${Result}`,
            }

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
            const activityId = randomUUID()

            const validatedData = ActivitySchema.parse({ activityId, title, desc });

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
                    message: `Activity with ID "${activityId}" not found`,
                    error: true
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
                    message: `Activity with ID "${activityId}" not found`,
                    error: true
                }
            }

            const deleteUser = await this.prismaService.activity.delete({
                where: {
                    activityID: activityId
                },
            });

            return {
                status: 200,
                message: 'delete data successfully',
                data: deleteUser
            }
        } catch (error) {
            return {
                status: 500,
                message: `update data failed`,
                error: error
            }
        }
    }

}
