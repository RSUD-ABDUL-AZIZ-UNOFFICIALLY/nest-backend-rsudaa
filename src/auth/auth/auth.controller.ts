import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/user/user/user.service';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('/login')
    login(
        @Body('no_wa') no_wa: string,
        @Body('password') password: string
    ) {
        return this.authService.login(no_wa, password)
    }
}
