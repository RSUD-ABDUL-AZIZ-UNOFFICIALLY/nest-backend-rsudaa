import { Injectable } from '@nestjs/common';
import { article } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import * as mime from 'mime-types';
import { z } from 'zod';
import { randomUUID } from 'crypto';
import { WebResponse } from 'src/model/web.model';
import { articleRequest } from 'src/model/articel.model';

const articleSchema = z.object({
    articleID: z.string(),
    title: z.string(),
    desc: z.string().optional(),
    images: z.any().optional()
});

@Injectable()
export class ArticleService {
    constructor(
        private prismaService: PrismaService,
    ) { }

    async findAll(articleID?: string): Promise<WebResponse<article | article[]>> {
        try {
            let article: article | article[] = await this.prismaService.article.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            })
            if (articleID) {
                article = await this.prismaService.article.findFirst({
                    where: { articleID: articleID },
                    orderBy: {
                        createdAt: 'desc'
                    }
                })
            }

            return {
                success: true,
                message: 'get data successfully',
                data: article
            }
        } catch (error) {
            return {
                status: 500,
                message: 'get data failed',
                errors: error
            }
        }
    }

    async save(req: articleRequest): Promise<WebResponse<article>> {
        try {
            const articleID = randomUUID()

            const validate = articleSchema.parse({
                articleID: articleID,
                title: req.title,
                desc: req.desc,
                images: req.images ? req.images : null
            })

            const save = await this.prismaService.article.create({
                data: {
                    articleID: validate.articleID,
                    title: validate.title,
                    desc: validate.desc,
                    images: validate.images
                }
            })

            return {
                success: true,
                message: 'create data successfully',
                data: save
            }
        } catch (error) {
            return {
                success: false,
                message: `create data failed`,
                errors: error
            }
        }
    }

    async update(articleID: string, req: articleRequest): Promise<WebResponse<article>> {
        try {
            let article = await this.prismaService.article.findFirst({
                where: { articleID: articleID }
            })

            if (!article) {
                return {
                    success: false,
                    message: `article not found`
                }
            }

            const validate = articleSchema.parse({
                articleID: articleID,
                title: req.title ? req.title : article.title,
                desc: req.desc ? req.desc : article.desc,
                images: req.images ? req.images : article.images
            })

            const update = await this.prismaService.article.update({
                where: { articleID: articleID },
                data: {
                    title: validate.title,
                    desc: validate.desc,
                    images: validate.images
                }
            })

            return {
                success: true,
                message: 'update data successfully',
                data: update
            }
        } catch (error) {
            return {
                status: 500,
                message: `update data failed`,
                errors: error
            }
        }
    }
    async delete(articleID: string): Promise<WebResponse<any>> {
        try {
            const dataarticle = await this.prismaService.article.findUnique({
                where: {
                    articleID: articleID
                },
            });

            if (!dataarticle) {
                return {
                    success: false,
                    message: 'delete data failed',
                    errors: `Article with ID "${articleID}" not found`
                }
            }

            const deleteArticle = await this.prismaService.article.delete({
                where: {
                    articleID: articleID
                },
            });

            console.log(deleteArticle);

            return {
                success: true,
                message: 'delete data successfully',
            }
        } catch (error) {
            return {
                success: false,
                message: `delete data failed`,
                errors: error
            }
        }
    }
}
