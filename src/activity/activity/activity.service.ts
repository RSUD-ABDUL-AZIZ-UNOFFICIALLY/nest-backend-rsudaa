import { Injectable, Res } from '@nestjs/common';
import { activity } from '@prisma/client';
import { info } from 'console';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ValidationService } from 'src/validation/validation/validation.service';
import { z } from "zod";
@Injectable()
export class ActivityService {
    constructor(
        private prismaService: PrismaService,
        private validation: ValidationService
    ) { }

    findOne(name: string) {
        try {
            const schema = z.string().min(8).max(100)
            const Result = this.validation.validate(schema, name)

            return `hello ${Result}`
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
            console.log(error);
        }
    }

}
