import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import * as  winston from 'winston';
import { ValidationService } from './validation.service';
import { AuthMidlleware } from './auth.middleware';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
    imports: [
        WinstonModule.forRoot({
            format: winston.format.json(),
            transports: [new winston.transports.Console()]
        }),
        ConfigModule.forRoot({
            isGlobal: true
        }),
        JwtModule.register({
            global: true,
            secret: 'mysecret-rsaa',
            signOptions: {
                expiresIn: '1h'
            }
        })
    ],
    providers: [PrismaService, ValidationService],
    exports: [PrismaService, ValidationService]
})
export class CummonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMidlleware).forRoutes('/api/*')
    }
}
