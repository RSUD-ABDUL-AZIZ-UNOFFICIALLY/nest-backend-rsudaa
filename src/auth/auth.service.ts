import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ValidationService } from 'src/cummon/validation.service';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Logger } from 'winston';
import * as bcrypt from "bcrypt";
import { getOtpUserRequest, LoginUserRequest, RegisterUserRequest, UserResponse } from 'src/model/user.model';
import { WebResponse } from 'src/model/web.model';
import { UserValidation } from 'src/user/user/user.validation';
import { Response } from 'express';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { log } from 'console';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        private jwtService: JwtService,
        private configService: ConfigService
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

    async getOtp(req: getOtpUserRequest, res: Response): Promise<WebResponse<any>> {
        const SIMRS_URL = this.configService.get('SIMRS_URL')

        const getOtp = await axios.post(`${SIMRS_URL}/rest/getOtp`, {
            phone: req.no_wa,
            app_name: 'dashboard'
        })

        console.log(getOtp);


        return {
            success: true,
            message: getOtp.data.message,
        }

    }

    async login(req: LoginUserRequest, res: Response): Promise<WebResponse<UserResponse>> {

        const SIMRS_URL = this.configService.get('SIMRS_URL')

        const loginRequest: LoginUserRequest = this.validationService.validate(UserValidation.LOGIN, req)

        let user = await this.prismaService.user.findFirst(
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

        let token = ''

        try {
            const getLogin = await axios.post(`${SIMRS_URL}/rest/login`, {
                phone: req.no_wa,
                otp: req.otp
            })


            user = await this.prismaService.user.update({
                where: { no_wa: req.no_wa },
                data: {
                    token: getLogin.data.token_api
                }
            })

            console.log(user);


            return {
                success: true,
                message: 'login successfully',
                data: {
                    message: getLogin.data.message,
                    token: user.token
                }
            }

        } catch (error) {
            return {
                success: false,
                message: 'otp code is wrong'
            }
        }

        // const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password)

        // if (!isPasswordValid) {
        //     throw new HttpException({
        //         success: false,
        //         message: `password is invalid`
        //     }, HttpStatus.FORBIDDEN)
        // }

        const access_token = await this.jwtService.signAsync({
            no_wa: user.no_wa,
            fullName: user.fullName
        })


        user = await this.prismaService.user.update({
            where: { no_wa: loginRequest.no_wa },
            data: {
                token: token
            }
        })
        const expirationTime = 7 * 24 * 60 * 60 * 1000;

        res.cookie('access-token', user.token, {
            maxAge: expirationTime,
            httpOnly: true
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
}