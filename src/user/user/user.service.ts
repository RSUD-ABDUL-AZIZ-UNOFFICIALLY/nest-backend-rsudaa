import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { user } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ValidationService } from 'src/cummon/validation.service';
import { LoginUserRequest, RegisterUserRequest, UserResponse } from 'src/model/user.model';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Logger } from 'winston';
import { UserValidation } from './user.validation';
import * as bcrypt from "bcrypt";
import { WebResponse } from 'src/model/web.model';
import { v4 as uuid } from "uuid";
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService,
        private validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        private jwtService: JwtService
    ) { }

    async getAuth(req: Request): Promise<WebResponse<UserResponse>> {
        let [type, token] = req.headers.authorization?.split(' ') ?? [];

        const authUserCurrent = await this.prismaService.user.findFirst({
            where: { token: token }
        })

        if (!authUserCurrent) {
            throw new UnauthorizedException('please login')
        }

        return {
            success: true,
            message: 'get data successfully',
            data: {
                no_wa: authUserCurrent.no_wa,
                fullName: authUserCurrent.fullName
            }
        }
    }
}
