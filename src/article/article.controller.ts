import { Body, Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ArticleService } from './article.service';
import { WebResponse } from 'src/model/web.model';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/cummon/auth.decorator';
import { user } from '@prisma/client';

@Controller('/api/article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ) { }

    @Get()
    async getActivity(
        @Query('data') data?: any
    ): Promise<WebResponse<any>> {
        data = parseInt(data)
        return this.articleService.findAll(data)
    }

    @Post('/post')
    @UseInterceptors(FilesInterceptor('images'))
    async postActivity(
        @Auth() user: user,
        @Body('title') title: string,
        @Body('desc') desc?: string,
        @UploadedFiles(
            new ParseFilePipeBuilder()
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                    fileIsRequired: false
                }),
        ) images?: Array<Express.Multer.File>,
    ): Promise<any> {
        return await this.articleService.save(title, desc, images)
    }

    @Post('/update/:articleId')
    @UseInterceptors(FilesInterceptor('images'))
    async updateActivity(
        @Auth() user: user,
        @Param('articleId') articleId: string,
        @Body('title') title?: string,
        @Body('desc') desc?: string,
        @UploadedFiles(
            new ParseFilePipeBuilder()
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                    fileIsRequired: false
                }),
        ) images?: Array<Express.Multer.File>,
    ): Promise<any> {
        return await this.articleService.update(articleId, title, desc, images)
    }

    @Post('/delete/:articleId')
    async deleteActivity(
        @Auth() user: user,
        @Param('articleId') activityId: string,
    ): Promise<any> {
        return await this.articleService.delete(activityId)
    }
}
