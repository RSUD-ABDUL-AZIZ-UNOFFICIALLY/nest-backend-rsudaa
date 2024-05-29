import { Body, Controller, Delete, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ArticleService } from './article.service';
import { WebResponse } from 'src/model/web.model';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/cummon/auth.decorator';
import { user } from '@prisma/client';
import { articleRequest } from 'src/model/articel.model';

@Controller('/api/web-profile/article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ) { }

    @Get()
    async getActivity(
        @Query('articleID') articleID?: string
    ) {
        return this.articleService.findAll(articleID)
    }

    @Post()
    async postActivity(
        @Auth() user: user,
        @Body() req: articleRequest,
    ) {
        return await this.articleService.save(req)
    }

    @Put('/:articleID')
    async updateActivity(
        @Auth() user: user,
        @Param('articleID') articleID: string,
        @Body() req: articleRequest,
    ) {
        return await this.articleService.update(articleID, req)
    }

    @Delete('/:articleID')
    async deleteActivity(
        @Auth() user: user,
        @Param('articleID') articleID: string,
    ) {
        return await this.articleService.delete(articleID)
    }
}
