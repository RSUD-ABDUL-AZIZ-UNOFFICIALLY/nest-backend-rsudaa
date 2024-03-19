import { Injectable } from '@nestjs/common';
import { PrismaClient, activity, announcement } from '@prisma/client';
import { info } from 'console';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super()
        info('create prisma service')
    }

    async findMany(): Promise<activity[]> {
        return await this.activity.findMany();
    }

    async findManyAnnounce(): Promise<announcement[]> {
        return await this.announcement.findMany();
    }
}

