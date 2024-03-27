import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { WebResponse } from 'src/model/web.model';
import { RegisterUserRequest, UserResponse } from 'src/model/user.model';

@Controller('/api/users')
export class UserController {
    constructor(
        private userService: UserService
    ) { }


    @Post('/register')
    async register(
        @Body() request: RegisterUserRequest
    ): Promise<WebResponse<UserResponse>> {
        return {
            data: {
                fullName: '',
                no_wa: ''
            }
        }
    }

}
