import { UUID } from "crypto"

export class applyLokerResponse {
    id: string
    email: string
    fullName: string
    tanggalLahir: string
    nik: string
    no_wa: string
    lokerId: UUID
    sekolah: string
    jurusan: string
    jenjang: string
    address: string
    createdAt: string
    updatedAut: string
}

export class applyLokerRequest {
    email: string
    fullName: string
    tanggalLahir: string
    nik: string
    no_wa: string
    lokerId: UUID
    sekolah: string
    jurusan: string
    jenjang: string
    address: string
    fileResume?: string
    fileApply?: string
    fileOther?: string
}