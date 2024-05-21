import { laporanTahunan } from "@prisma/client"

export class fileLaporanTahunanResponse {
    tahun?: number
    laporanTahunan?: laporanTahunan | laporanTahunan[]
    laporanTahunanName?: string
    file?: string
    desc?: string
    createdAt?: string
    updatedAt?: string
}

export class fileLaporanTahunanRequest {
    tahun: number
    laporanTahunanName: string
    file?: string
    desc?: string
}

export class fileLaporanTahunanUpdateRequest {
    tahun?: number
    laporanTahunanName?: string
    file?: string
    desc?: string
}