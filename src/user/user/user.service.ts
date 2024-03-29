import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
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
import { Response } from 'express';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService,
        private validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        private jwtService: JwtService
    ) { }

    async register(request: RegisterUserRequest): Promise<WebResponse<UserResponse>> {

        this.logger.info(`register new user ${JSON.stringify(request)}`)

        const registerRequest: RegisterUserRequest = this.validationService.validate(UserValidation.REGISTER, request)

        const dataUser = await this.prismaService.user.findUnique(
            {
                where: {
                    no_wa: registerRequest.no_wa
                }
            }
        )

        if (dataUser) {
            throw new HttpException({
                success: false,
                message: `whatsapp already exist`
            }, HttpStatus.FORBIDDEN)
        }

        const hassPass = await bcrypt.hash(registerRequest.password, 10)

        const registerUser = await this.prismaService.user.create({
            data: {
                no_wa: registerRequest.no_wa,
                password: hassPass,
                fullName: registerRequest.fullName,
            }
        })

        return {
            message: `register successfully`,
            success: true,
            data: {
                no_wa: registerRequest.no_wa,
                fullName: registerUser.fullName,
            }
        }
    }

    async login(req: LoginUserRequest): Promise<WebResponse<UserResponse>> {
        this.logger.info(`login user ${JSON.stringify(req)}`)

        const loginRequest: LoginUserRequest = this.validationService.validate(UserValidation.LOGIN, req)

        let user = await this.prismaService.user.findUnique(
            {
                where: {
                    no_wa: loginRequest.no_wa
                }
            }
        )

        if (!user) {
            // throw new UnauthorizedException();
            throw new HttpException({
                success: false,
                message: `account is not registered`
            }, HttpStatus.FORBIDDEN)
        }

        const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password)

        if (!isPasswordValid) {
            throw new HttpException({
                success: false,
                message: `password is invalid`
            }, HttpStatus.FORBIDDEN)
        }

        const access_token = await this.jwtService.signAsync({
            no_wa: user.no_wa,
            fullName: user.fullName
        })


        user = await this.prismaService.user.update({
            where: { no_wa: loginRequest.no_wa },
            data: {
                token: access_token
            }
        })

        return {
            success: true,
            message: 'login successfully',
            data: {
                no_wa: user.no_wa,
                fullName: user.fullName,
                token: user.token
            }
        }
    }

    async findOne(no_wa: string): Promise<user | any> {
        return await this.prismaService.user.findUnique({ where: { no_wa: no_wa } })
    }

    async getAuth(user: user, req: Request): Promise<WebResponse<UserResponse>> {
        // const token = req.headers['authorization']
        return {
            success: true,
            message: 'get data successfully',
            data: {
                no_wa: user.no_wa,
                fullName: user.fullName,
            }
        }
    }
}
