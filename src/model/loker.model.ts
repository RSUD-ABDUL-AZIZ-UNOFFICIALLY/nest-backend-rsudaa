import { z } from "zod"

export class LokerResponse {
    id?: string
    name?: string
    desc?: string
    dateStart?: any
    dateEnd?: any
    createdAt?: string
    updatedAt?: string
}

export class LokerCreateRequest {
    name: string
    desc?: string
    dateStart?: any
    dateEnd?: any
}