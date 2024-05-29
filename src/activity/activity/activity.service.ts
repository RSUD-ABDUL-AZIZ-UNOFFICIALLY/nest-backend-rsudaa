import { Injectable, NotFoundException, ParamData } from '@nestjs/common';
import { activity } from '@prisma/client';
import { randomUUID } from 'crypto';
import { z } from "zod";
import * as mime from 'mime-types';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { WebResponse } from 'src/model/web.model';
import { activityRequest } from 'src/model/activity.model';

const ActivitySchema = z.object({
    activityID: z.string(),
    title: z.string(),
    desc: z.string().optional(),
    images: z.any().optional()
});

@Injectable()
export class ActivityService {
    constructor(
        private prismaService: PrismaService,
    ) { }

    async findAll(activityID?: string): Promise<WebResponse<activity | activity[]>> {
        try {
            let activity: activity | activity[] = await this.prismaService.activity.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            })
            if (activityID) {
                activity = await this.prismaService.activity.findFirst({
                    where: { activityID: activityID },
                    orderBy: {
                        createdAt: 'desc'
                    }
                })
            }

            return {
                success: true,
                message: 'get data successfully',
                data: activity
            }
        } catch (error) {
            return {
                status: 500,
                message: 'get data failed   ',
                errors: error
            }
        }
    }

    async save(req: activityRequest): Promise<WebResponse<activity>> {
        try {
            const activityID = randomUUID()

            const validate = ActivitySchema.parse({
                activityID: activityID,
                title: req.title,
                desc: req.desc,
                images: req.images ? req.images : null
            })

            const save = await this.prismaService.activity.create({
                data: {
                    activityID: validate.activityID,
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
                success: false,
                message: `create data failed`,
                errors: error
            }
        }
    }

    async update(activityID: string, req: activityRequest): Promise<WebResponse<activity>> {
        try {
            let activity = await this.prismaService.activity.findFirst({
                where: { activityID: activityID }
            })

            if (!activity) {
                return {
                    success: false,
                    message: `activity not found`
                }
            }

            const validate = ActivitySchema.parse({
                activityID: activityID,
                title: req.title ? req.title : activity.title,
                desc: req.desc ? req.desc : activity.desc,
                images: req.images ? req.images : activity.images
            })

            const update = await this.prismaService.activity.update({
                where: { activityID: activityID },
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
    async delete(activityID: string): Promise<WebResponse<any>> {
        try {
            const dataActivity = await this.prismaService.activity.findUnique({
                where: {
                    activityID: activityID
                },
            });

            if (!dataActivity) {
                return {
                    success: false,
                    message: 'delete data failed',
                    errors: `Article with ID "${activityID}" not found`
                }
            }

            const deleteArticle = await this.prismaService.activity.delete({
                where: {
                    activityID: activityID
                },
            });

            console.log(deleteArticle);

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
