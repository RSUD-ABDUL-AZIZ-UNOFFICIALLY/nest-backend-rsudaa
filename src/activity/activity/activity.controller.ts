import { Controller, Get } from '@nestjs/common';

@Controller('/api/activity')
export class ActivityController {
    @Get()
    getActivity(): string {
        return 'sadda'
    }
}
