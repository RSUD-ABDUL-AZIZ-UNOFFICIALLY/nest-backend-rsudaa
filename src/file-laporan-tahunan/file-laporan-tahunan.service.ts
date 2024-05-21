import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { fileLaporanTahunan } from '@prisma/client';
import { fileLaporanTahunanRequest } from 'src/model/fileLaporanTahunan.model';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class FileLaporanTahunanService {
    constructor(
        private prismaService: PrismaService,
        private configService: ConfigService
    ) { }

    async getData(tahun?: number): Promise<WebResponse<fileLaporanTahunan | fileLaporanTahunan[]>> {
        let data: fileLaporanTahunan | fileLaporanTahunan[] = await this.prismaService.fileLaporanTahunan.findMany({
            include: { laporanTahunan: true }
        })

        if (tahun) {
            data = await this.prismaService.fileLaporanTahunan.findFirst({
                where: { tahun: tahun },
                include: { laporanTahunan: true }
            })
        }

        return {
            success: true,
            message: `get data successfully`,
            data: data
        }
    }

    async post(req: fileLaporanTahunanRequest, file: Express.Multer.File): Promise<WebResponse<fileLaporanTahunan>> {
        let { tahun, laporanTahunanName, desc } = req
        
        

        return {

        }
    }
}
