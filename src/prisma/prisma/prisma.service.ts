import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { info } from 'console';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super()
        info('create prisma service')
    }
}

