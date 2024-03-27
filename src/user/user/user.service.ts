import { HttpException, Inject, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ValidationService } from 'src/cummon/validation.service';
import { RegisterUserRequest, UserResponse } from 'src/model/user.model';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Logger } from 'winston';
import { UserValidation } from './user.validation';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService,
        private validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger
    ) { }

    async register(request: RegisterUserRequest): Promise<UserResponse> {
        this.logger.info(`register new user ${JSON.stringify(request)}`)
        const registerRequest = this.validationService.validate(UserValidation.REGISTER, request)

        const dataUser = await this.prismaService.user.findUnique({
            where: {
                no_wa: registerRequest.no_wa
            }
        })

        if (dataUser) {
            throw new HttpException('whatsapp number already exist', 400)
        }


        registerRequest.password = await bcrypt.hash(registerRequest.password, 20)

        const user = await this.prismaService.user.create({
            data: registerRequest
        })

        return {
            no_wa: user.no_wa,
            fullName: user.fullName
        }
    }

    async findOne(no_wa: string): Promise<user | any> {
        return await this.prismaService.user.findUnique({ where: { no_wa: no_wa } })
    }
}
