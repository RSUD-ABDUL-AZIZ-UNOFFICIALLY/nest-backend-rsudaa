import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ValidationService } from 'src/validation/validation/validation.service';

@Injectable()
export class ProfileService {
    constructor(
        private prismaService: PrismaService,
        private validation: ValidationService
    ) { }
}
