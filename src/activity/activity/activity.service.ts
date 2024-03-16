import { Injectable, Res } from '@nestjs/common';
import { activity } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { info } from 'console';
import { Sequelize } from 'sequelize-typescript';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ValidationService } from 'src/validation/validation/validation.service';
import { z } from "zod";

@Injectable()
export class ActivityService {
    constructor(
        private prismaService: PrismaService,
        private validation: ValidationService,
        private sequelize: Sequelize
    ) { }

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

    async save(title: string, desc?: string, images?: any): Promise<any> {
        try {
            let imagesName = null
            if (images) {
                imagesName = [images.originalname]
            }

            const newActivity = await this.prismaService.activity.create({
                data: {
                    title: title,
                    desc: desc,
                    images: [imagesName, imagesName, imagesName]
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

}
