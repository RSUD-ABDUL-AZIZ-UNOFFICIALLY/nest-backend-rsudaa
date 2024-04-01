import { z, ZodType } from "zod";

export class UserValidation {
    static readonly REGISTER: ZodType = z.object({
        no_wa: z.string().min(1).max(100),
        fullName: z.string().min(1).max(100),
        password: z.string().min(1).max(100)
    })

    static readonly LOGIN: ZodType = z.object({
        no_wa: z.string().min(1).max(100),
        password: z.string().min(1).max(100).optional(),
        otp: z.string().min(1).max(100)
    })
}