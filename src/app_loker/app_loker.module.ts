import { Module } from '@nestjs/common';
import { AppLokerController } from './app_loker/app_loker.controller';
import { AppLokerService } from './app_loker/app_loker.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppLokerController],
  providers: [AppLokerService]
})
export class AppLokerModule { }
