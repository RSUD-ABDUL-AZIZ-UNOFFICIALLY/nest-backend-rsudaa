import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { getOtpUserRequest, LoginUserRequest, RegisterUserRequest, UserResponse } from 'src/model/user.model';
import { WebResponse } from 'src/model/web.model';
import { Response } from 'express';

@Controller('/api/web-profile/auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('/register')
    async register(
        @Body() request: RegisterUserRequest
    ): Promise<WebResponse<UserResponse>> {
        return await this.authService.register(request)
    }

    @Post('/getOtp')
    async getOtp(
        @Body() req: getOtpUserRequest,
        @Res({ passthrough: true }) res: Response
    ): Promise<WebResponse<UserResponse>> {
        return await this.authService.getOtp(req, res)
    }

    @Post('/login')
    async login(
        @Body() req: LoginUserRequest,
        @Res({ passthrough: true }) res: Response
    ): Promise<WebResponse<UserResponse>> {
        return await this.authService.login(req, res)
    }
}
