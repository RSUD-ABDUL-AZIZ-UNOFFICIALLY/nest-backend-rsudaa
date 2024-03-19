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
                        message: `socmed with NAME "${data.name}" has been added`
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
}
