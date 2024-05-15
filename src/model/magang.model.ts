import { z } from "zod"

export class MagangResponse {
    id?: string
    name?: string
    desc?: string
    dateStart?: any
    dateEnd?: any
    createdAt?: string
    updatedAt?: string
}

export class MagangCreateRequest {
    name: string
    desc?: string
    dateStart?: any
    dateEnd?: any
}