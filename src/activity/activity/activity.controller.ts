import { Body, Controller, Get, Header, Param, Post, Req, Res } from '@nestjs/common';
import { Response } from "express";
import { ActivityService } from './activity.service';
import { promises } from 'dns';

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
    async findOne(@Param('name') name: string) {
        return await this.activityService.findOne(name)
    }

    @Post('/post')
    @Header('Content-Type', 'application/json')
    async postActivity(@Body('name') name: string, @Body('link') link: string, @Res() res: Response): Promise<string> {
        return await new Promise((resolve, reject) => {
            res.status(200).json({
                status: 200,
                message: `Received data successfully`,
                data: {
                    name: name,
                    link: link
                }
            });
            resolve('Response sent successfully'); // Resolve the promise with a success message
        });
    }
}
