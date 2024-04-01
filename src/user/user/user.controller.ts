import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { WebResponse } from 'src/model/web.model';
import { LoginUserRequest, RegisterUserRequest, UserResponse } from 'src/model/user.model';
import { Auth } from 'src/cummon/auth.decorator';
import { user } from '@prisma/client';
import { AuthMidlleware } from 'src/cummon/auth.middleware';
import { Request, Response } from 'express';

@Controller('/api/users')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Get('/current')
    async getAuth(
        @Auth() user: user,
        @Req() req: Request
    ): Promise<WebResponse<UserResponse> | any> {
        return await this.userService.getAuth(req)
    }

}
