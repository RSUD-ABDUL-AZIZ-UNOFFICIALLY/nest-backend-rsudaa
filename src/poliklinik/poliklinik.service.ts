import { Inject, Injectable, ParamData } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ValidationService } from 'src/cummon/validation.service';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { Logger } from 'winston';

@Injectable()
export class PoliklinikService {
    constructor(
        private prismaService: PrismaService,
        private validationService: ValidationService,
        @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
        private configService: ConfigService
    ) { }

    async findAll(): Promise<WebResponse<any>> {
        try {
            const baseUrl = this.configService.get('SIMRS_URL')
            const usernameSIMRS = this.configService.get('SIMRS_USERNAME')
            const passwordSIMRS = this.configService.get('SIMRS_PASSWORD')

            const loginSIMRS = await axios.post(`${baseUrl}/api/auth/login`, {
                username: usernameSIMRS,
                password: passwordSIMRS
            })

            let simrsToken = ''

            if (loginSIMRS && loginSIMRS.data && loginSIMRS.data.data) {
                simrsToken = loginSIMRS.data.data.refresh_token
            }

            const dataPoli = await axios.get(`${baseUrl}/api/ralan/drpoli`, {
                headers: {
                    Authorization: `bearer ${simrsToken}`
                }
            })

            if (dataPoli && dataPoli.data) {
                return {
                    success: true,
                    message: `get data successfully`,
                    data: {
                        poli: dataPoli.data.data
                    }
                }
            }

            return {
                success: false,
                message: `get data failed`,
            }

        } catch (error) {
            return {
                success: false,
                message: `get data failed`,
                errors: error
            }
        }
    }

    async getDetail(
        kd_poli: string
    ): Promise<WebResponse<any>> {
        try {
            const baseUrl = this.configService.get('SIMRS_URL')
            const usernameSIMRS = this.configService.get('SIMRS_USERNAME')
            const passwordSIMRS = this.configService.get('SIMRS_PASSWORD')

            const loginSIMRS = await axios.post(`${baseUrl}/api/auth/login`, {
                username: usernameSIMRS,
                password: passwordSIMRS
            })

            let simrsToken = ''

            if (loginSIMRS && loginSIMRS.data && loginSIMRS.data.data) {
                simrsToken = loginSIMRS.data.data.refresh_token
            }

            const dataPoli = await axios.get(`${baseUrl}/api/ralan/jadwal?kd_poli=${kd_poli}`, {
                headers: {
                    Authorization: `bearer ${simrsToken}`
                }
            })

            if (dataPoli && dataPoli.data) {
                return {
                    success: true,
                    message: `get data successfully`,
                    data: dataPoli.data.data
                }
            }

            return {
                success: false,
                message: `get data failed`,
            }

        } catch (error) {
            return {
                success: false,
                message: `get data failed`,
                errors: error
            }
        }
    }

    async getDetailDokter(
        kd_poli: string
    ): Promise<WebResponse<any>> {
        try {
            const baseUrl = this.configService.get('SIMRS_URL')
            const usernameSIMRS = this.configService.get('SIMRS_USERNAME')
            const passwordSIMRS = this.configService.get('SIMRS_PASSWORD')

            const loginSIMRS = await axios.post(`${baseUrl}/api/auth/login`, {
                username: usernameSIMRS,
                password: passwordSIMRS
            })

            let simrsToken = ''

            if (loginSIMRS && loginSIMRS.data && loginSIMRS.data.data) {
                simrsToken = loginSIMRS.data.data.refresh_token
            }

            const dataPoli = await axios.get(`${baseUrl}/api/ralan/jadwal/bydr?kd_poli=${kd_poli}`, {
                headers: {
                    Authorization: `bearer ${simrsToken}`
                }
            })

            if (dataPoli && dataPoli.data) {
                return {
                    success: true,
                    message: `get data successfully`,
                    data: dataPoli.data.data
                }
            }

            return {
                success: false,
                message: `get data failed`,
            }

        } catch (error) {
            return {
                success: false,
                message: `get data failed`,
                errors: error
            }
        }
    }
}
