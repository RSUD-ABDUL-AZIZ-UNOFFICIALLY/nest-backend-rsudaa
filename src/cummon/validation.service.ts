import { Injectable } from "@nestjs/common";
import { ZodType } from "zod";
@Injectable()
export class ValidationService {
    validate<T>(z: ZodType<T>, data: T): T {
        return z.parse(data)
    }
}