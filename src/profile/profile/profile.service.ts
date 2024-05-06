import { Injectable } from '@nestjs/common';
import { profile } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { date, z } from "zod";
import * as mime from 'mime-types';
import { error } from 'console';
import { WebResponse } from 'src/model/web.model';
const ProfileSchema = z.object({
    name: z.string(),
    desc: z.string().optional(),
    images: z.any().optional()
});

@Injectable()
export class ProfileService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async findAll(): Promise<WebResponse<profile | any>> {
        try {
            const profile = await this.prismaService.profile.findMany()

            return {
                status: 200,
                message: 'get data successfully',
                success: true,
                data: {
                    length: profile.length,
                    profile: profile
                }
            }
        } catch (error) {
            return {
                status: 500,
                success: false,
                message: 'get data failed   ',
                errors: error
            }
        }
    }

    async findOne(name: string): Promise<WebResponse<profile | any>> {
        try {

            const data = await this.prismaService.profile.findUnique({
                where: {
                    name: name
                },
            });

            if (!data) {
                return {
                    success: false,
                    message: 'get data failed',
                    errors: `data with name ${name} not found`
                }
            }

            return {
                success: true,
                message: 'get data successfully',
                data: data
            }
        } catch (error) {
            return {
                success: false,
                message: 'get data failed   ',
                errors: error
            }
        }
    }

    async save(name: string, desc?: string, images?: Array<Express.Multer.File>): Promise<WebResponse<profile | any>> {
        try {
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    const mimeType = mime.lookup(images[i].originalname);
                    if (!mimeType || !['image/jpeg', 'image/jpg', 'image/png'].includes(mimeType)) {
                        return {
                            success: false,
                            message: 'post data failed',
                            errors: 'files must have images extensions [jpg, jpeg, png]'
                        }
                    }
                }
            }

            const validatedData = ProfileSchema.parse(
                {
                    name,
                    desc,
                    images,
                }
            );

            const data = await this.prismaService.profile.findUnique({
                where: {
                    name: name
                },
            });

            if (!data) {
                return {
                    success: false,
                    message: 'post data failed',
                    errors: {
                        path: 'unique',
                        message: `Data with NAME "${data.name}" has been added`
                    }
                }
            }

            let dataImages = []
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    dataImages.push(images[i].originalname)
                }
            }

            const newProfile = await this.prismaService.profile.create({
                data: {
                    name: validatedData.name,
                    desc: validatedData.desc,
                    images: dataImages
                }
            });

            return {
                success: true,
                message: 'create data socmed successfully',
                data: {
                    data: newProfile
                }
            }
        } catch (error) {
            return {
                success: false,
                message: `create data failed`,
                errors: error
            }
        }
    }

    async update(dataName: string, name?: string, desc?: string, images?: Array<Express.Multer.File>): Promise<WebResponse<profile | any>> {
        try {
            const data = await this.prismaService.profile.findUnique({
                where: {
                    name: dataName
                },
            });

            if (!data) {
                return {
                    success: false,
                    message: 'post data failed',
                    errors: `Data with name "${data}" not found`
                }
            }

            if (images) {
                for (let i = 0; i < images.length; i++) {
                    const mimeType = mime.lookup(images[i].originalname);
                    if (!mimeType || !['image/jpeg', 'image/jpg', 'image/png'].includes(mimeType)) {
                        return {
                            success: false,
                            message: 'post data failed',
                            errors: 'files must have images extensions [jpg, jpeg, png]'
                        }
                    }
                }
            }

            let dataImages = []
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    dataImages.push(images[i].originalname)
                }
            }

            const validatedData = ProfileSchema.parse(
                {
                    name: name ? name : data.name,
                    desc: desc ? desc : data.desc,
                    images: images ? dataImages : data.images
                }
            );

            const updatedActivity = await this.prismaService.profile.update({
                where: { name: dataName },
                data: {
                    name: name ? validatedData.name : data.name,
                    desc: desc ? validatedData.desc : data.desc,
                    images: images ? dataImages : data.images
                }
            });

            return {
                success: true,
                message: 'update data successfully',
                data: updatedActivity
            }
        } catch (error) {
            return {
                success: false,
                message: `update data failed`,
                errors: error
            }
        }
    }

    async delete(name: string): Promise<WebResponse<profile | any>> {
        try {
            const dataActivity = await this.prismaService.profile.findUnique({
                where: {
                    name: name
                },
            });

            if (!dataActivity) {
                return {
                    success: false,
                    message: 'delete data failed',
                    errors: `data with ID "${name}" not found`
                }
            }

            const deleteActivity = await this.prismaService.profile.delete({
                where: {
                    name: name
                },
            });

            return {
                success: true,
                message: 'delete data successfully',
                data: deleteActivity
            }
        } catch (error) {
            return {
                success: true,
                message: `delete data failed`,
                errors: error
            }
        }
    }
}
