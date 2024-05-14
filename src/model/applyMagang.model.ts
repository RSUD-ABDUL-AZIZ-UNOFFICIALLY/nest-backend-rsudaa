import { UUID } from "crypto"

export class applyMagangResponse {
    id: string
    email: string
    fullName: string
    tanggalLahir: string
    nik: string
    no_wa: string
    magangId: UUID
    sekolah: string
    jurusan: string
    jenjang: string
    address: string
    createdAt: string
    updatedAut: string
}

export class applyMagangRequest {
    email: string
    fullName: string
    tanggalLahir: string
    nik: string
    no_wa: string
    magangId: UUID
    sekolah: string
    jurusan: string
    jenjang: string
    address: string
    fileResume?: string
    fileApply?: string
    fileOther?: string
}