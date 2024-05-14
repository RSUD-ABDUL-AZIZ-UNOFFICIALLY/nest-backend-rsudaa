import { Module } from '@nestjs/common';
import { AppMagangService } from './app_magang.service';
import { AppMagangController } from './app_magang.controller';

@Module({
  providers: [AppMagangService],
  controllers: [AppMagangController]
})
export class AppMagangModule {}
