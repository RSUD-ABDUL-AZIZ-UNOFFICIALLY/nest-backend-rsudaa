import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from 'src/user/user/user.service';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule { }
