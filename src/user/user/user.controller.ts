import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('')
export class UserController {
    constructor(
        private userService: UserService
    ) { }
}
