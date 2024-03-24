import { Injectable } from '@nestjs/common';
import { PrismaClient, activity, announcement, loker, profile, socmed } from '@prisma/client';
import { info } from 'console';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super()
    }

    async findMany(): Promise<activity[]> {
        return await this.activity.findMany();
    }

    async findManyAnnounce(): Promise<announcement[]> {
        return await this.announcement.findMany();
    }

    async findManySocmed(): Promise<socmed[]> {
        return await this.socmed.findMany();
    }

    async findManyProfile(): Promise<profile[]> {
        return await this.profile.findMany();
    }

    async findManyLoker(): Promise<loker[]> {
        return await this.loker.findMany();
    }
}

