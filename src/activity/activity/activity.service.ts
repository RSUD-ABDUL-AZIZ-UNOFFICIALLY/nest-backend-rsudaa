import { Injectable, Res } from '@nestjs/common';
import { activity } from '@prisma/client';
import { info } from 'console';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class ActivityService {
    constructor(private prismaService: PrismaService) {
        console.log('create user repository');
    }

    findOne(name: string): string {
        return `this ${name}`
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
