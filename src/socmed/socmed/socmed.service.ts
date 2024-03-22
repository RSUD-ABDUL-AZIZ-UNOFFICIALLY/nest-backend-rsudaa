import { Injectable } from '@nestjs/common';
import { date, z } from "zod";
import * as mime from 'mime-types';
import { socmed } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ValidationService } from 'src/validation/validation/validation.service';
import { Url } from 'url';
import path from 'path';

const SocmedSchema = z.object({
    name: z.string(),
    link: z.string(),
});

@Injectable()
export class SocmedService {
    constructor(
        private prismaService: PrismaService,
        private validation: ValidationService,
    ) { }

    async findAll(): Promise<socmed | any> {
        try {
            const announcement = await this.prismaService.findManySocmed()

            return {
                status: 200,
                message: 'get data successfully',
                data: {
                    socmed: announcement
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

    async save(name: string, link: Url): Promise<socmed | any> {
        try {
            const validatedData = SocmedSchema.parse(
                {
                    name,
                    link
                }
            );

            const data = await this.prismaService.socmed.findUnique({
                where: {
                    name: name
                },
            });

            if (data) {
                return {
                    status: 200,
                    message: 'post data failed',
                    error: {
                        path: 'unique',
                        message: `Social Media with NAME "${data.name}" has been added`
                    }
                }
            }

            const newSocmed = await this.prismaService.socmed.create({
                data: {
                    name: validatedData.name,
                    link: validatedData.link,
                }
            });

            return {
                status: 200,
                message: 'create data socmed successfully',
                data: {
                    activity: newSocmed
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

    async update(nameSocmed: string, name?: string, link?: Url): Promise<any> {
        try {
            const dataSocmed = await this.prismaService.socmed.findUnique({
                where: {
                    name: nameSocmed
                },
            });

            if (!dataSocmed) {
                return {
                    status: 200,
                    message: 'post data failed',
                    error: `Social media with name "${name}" not found`
                }
            }

            const validatedData = SocmedSchema.parse(
                {
                    name: name ? name : dataSocmed.name,
                    link: link ? link : dataSocmed.link
                }
            );

            const updatedSocmed = await this.prismaService.socmed.update({
                where: { name: nameSocmed },
                data: {
                    name: name ? validatedData.name : dataSocmed.name,
                    link: link ? validatedData.link : dataSocmed.link,
                }
            });

            return {
                status: 200,
                message: 'update data successfully',
                data: updatedSocmed
            }
        } catch (error) {
            return {
                status: 500,
                message: `update data failed`,
                error: error
            }
        }
    }

    async delete(name: string): Promise<any> {
        try {
            const dataSocmed = await this.prismaService.socmed.findUnique({
                where: {
                    name: name
                },
            });

            if (!dataSocmed) {
                return {
                    status: 200,
                    message: 'delete data failed',
                    error: `Social Media with name "${name}" not found`
                }
            }

            const deleteSocmed = await this.prismaService.socmed.delete({
                where: {
                    name: name
                },
            });

            return {
                status: 200,
                message: 'delete data successfully',
                data: deleteSocmed
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
