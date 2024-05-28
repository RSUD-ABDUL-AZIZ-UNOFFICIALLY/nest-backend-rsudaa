import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ActivityModule } from './activity/activity.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { SocmedModule } from './socmed/socmed.module';
import { ProfileModule } from './profile/profile.module';
import { LokerModule } from './loker/loker.module';
import { MagangModule } from './magang/magang.module';
import { AppLokerModule } from './app_loker/app_loker.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { UserModule } from './user/user.module';
import { CummonModule } from './cummon/cummon.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { DokterModule } from './dokter/dokter.module';
import { PoliklinikModule } from './poliklinik/poliklinik.module';
import { ArticleModule } from './article/article.module';
import { AppMagangModule } from './app_magang/app_magang.module';
import { LaporanTahunanModule } from './laporan-tahunan/laporan-tahunan.module';
import { FileLaporanTahunanModule } from './file-laporan-tahunan/file-laporan-tahunan.module';
import { LinkAplikasiModule } from './link-aplikasi/link-aplikasi.module';
import { DasarHukumModule } from './dasar-hukum/dasar-hukum.module';


@Module({
  imports: [
    ActivityModule,
    PrismaModule,
    AnnouncementModule,
    SocmedModule,
    ProfileModule,
    LokerModule,
    MagangModule,
    AppLokerModule,
    UserModule,
    CummonModule,
    AuthModule,
    DokterModule,
    PoliklinikModule,
    ArticleModule,
    AppMagangModule,
    LaporanTahunanModule,
    FileLaporanTahunanModule,
    LinkAplikasiModule,
    DasarHukumModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
