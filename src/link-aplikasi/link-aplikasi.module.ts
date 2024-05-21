import { Module } from '@nestjs/common';
import { LinkAplikasiService } from './link-aplikasi.service';
import { LinkAplikasiController } from './link-aplikasi.controller';

@Module({
  providers: [LinkAplikasiService],
  controllers: [LinkAplikasiController]
})
export class LinkAplikasiModule {}
