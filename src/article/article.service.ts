import { Injectable } from '@nestjs/common';
import { article } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import * as mime from 'mime-types';
import { z } from 'zod';
import { randomUUID } from 'crypto';
import { WebResponse } from 'src/model/web.model';

const articleSchema = z.object({
    articleId: z.string().uuid(),
    title: z.string(),
    desc: z.string().optional(),
});

@Injectable()
export class ArticleService {
    constructor(
        private prismaService: PrismaService,
    ) { }

    async findAll(data?: number): Promise<WebResponse<article | any>> {
        try {
            let article = null
            article = await this.prismaService.article.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            })
            const record = article.length

            if (data) {
                article = await this.prismaService.article.findMany({
                    take: data,
                    orderBy: {
                        createdAt: 'desc'
                    }
                })
            }

            return {
                status: 200,
                message: 'get data successfully',
                allRecord: record,
                data: {
                    article: article
                }
            }
        } catch (error) {
            return {
                status: 500,
                message: 'get data failed',
                errors: error
            }
        }
    }
    async findAllPagination(page: number): Promise<article | any> {
        try {
            const article = await this.prismaService.article.findMany({
                take: 2,
            })

            return {
                status: 200,
                message: 'get data successfully',
                data: {
                    article: article
                }
            }
        } catch (error) {
            return {
                status: 500,
                message: 'get data failed   ',
                error: error
            }
        }
    }
    async save(title: string, desc?: string, images?: Array<Express.Multer.File>): Promise<any> {
        try {
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    const mimeType = mime.lookup(images[i].originalname);
                    if (!mimeType || !['image/jpeg', 'image/jpg', 'image/png'].includes(mimeType)) {
                        return {
                            status: 200,
                            message: 'post data failed',
                            error: 'files must have images extensions [jpg, jpeg, png]'
                        }
                    }
                }
            }

            const articleId = randomUUID()

            const validatedData = articleSchema.parse(
                {
                    articleId,
                    title,
                    desc
                });

            let articleImages = []
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    articleImages.push(images[i].originalname)
                }
            }

            const newarticle = await this.prismaService.article.create({
                data: {
                    articleID: validatedData.articleId,
                    title: validatedData.title,
                    desc: validatedData.desc,
                    images: articleImages
                }
            });

            return {
                status: 200,
                message: 'create data article successfully',
                data: {
                    article: newarticle
                }
            }
        } catch (error) {
            return {
                status: 500,
                message: `create data failed`,
                error: error
            }
        }
    }

    async update(articleId: string, title?: string, desc?: string, images?: Array<Express.Multer.File>): Promise<any> {
        try {
            const dataarticle = await this.prismaService.article.findUnique({
                where: {
                    articleID: articleId
                },
            });

            if (!dataarticle) {
                return {
                    status: 200,
                    message: 'post data failed',
                    error: `article with ID "${articleId}" not found`
                }
            }

            if (images) {
                for (let i = 0; i < images.length; i++) {
                    const mimeType = mime.lookup(images[i].originalname);
                    if (!mimeType || !['image/jpeg', 'image/jpg', 'image/png'].includes(mimeType)) {
                        return {
                            status: 200,
                            message: 'post data failed',
                            error: 'files must have images extensions [jpg, jpeg, png]'
                        }
                    }
                }
            }

            let articleImages = []
            if (images) {
                for (let i = 0; i < images.length; i++) {
                    articleImages.push(images[i].originalname)
                }
            }
            const validatedData = articleSchema.parse({ articleId, title, desc });

            const updatedarticle = await this.prismaService.article.update({
                where: { articleID: articleId },
                data: {
                    articleID: dataarticle.articleID,
                    title: title ? validatedData.title : dataarticle.title,
                    desc: desc ? validatedData.desc : dataarticle.desc,
                    images: images ? articleImages : dataarticle.images
                }
            });

            return {
                status: 200,
                message: 'update data successfully',
                data: updatedarticle
            }
        } catch (error) {
            return {
                status: 500,
                message: `update data failed`,
                error: error
            }
        }
    }
    async delete(articleId: string): Promise<any> {
        try {
            const dataarticle = await this.prismaService.article.findUnique({
                where: {
                    articleID: articleId
                },
            });

            if (!dataarticle) {
                return {
                    status: 200,
                    message: 'delete data failed',
                    error: `article with ID "${articleId}" not found`
                }
            }

            const deletearticle = await this.prismaService.article.delete({
                where: {
                    articleID: articleId
                },
            });

            return {
                status: 200,
                message: 'delete data successfully',
                data: deletearticle
            }
        } catch (error) {
            return {
                status: 500,
                message: `delete data failed`,
                error: error
            }
        }
    }
}
