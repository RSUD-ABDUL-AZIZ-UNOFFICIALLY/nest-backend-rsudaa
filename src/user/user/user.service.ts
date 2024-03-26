import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClient, user } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';


@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async findOne(no_wa: string): Promise<user | any> {
        return await this.prismaService.user.findUnique({ where: { no_wa: no_wa } })
    }
}
