import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Response } from "express";
import { ActivityService } from './activity.service';

@Controller('/api/activity')
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ) { }

    @Get()
    getActivity(): string {
        return 'this activity'
    }

    @Get('/findone/:name')
    findOne(@Param('name') name: string) {
        this.activityService.findOne(name)
    }

    @Post('/post')
    postActivity(@Body('name') name: string, @Body('link') link: string, @Res() res: Response) {
        res.status(200).json({
            status: 200,
            message: `Received data successfully`,
            data: {
                name: name,
                link: link
            }
        });
    }

}
