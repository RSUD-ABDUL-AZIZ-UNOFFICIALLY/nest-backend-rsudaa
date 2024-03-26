import { Injectable, UnauthorizedException } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { UserService } from 'src/user/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private prismaService: PrismaService
    ) { }

    async login(no_wa: string, password: string) {
        try {
            const user: Promise<user> = await this.userService.findOne(no_wa)

            if (!user) {
                return {
                    statusbar: 500,
                    message: `whatsapp number not register`
                }
            }

            return {
                user: user
            }


        } catch (error) {

        }
    }
}
