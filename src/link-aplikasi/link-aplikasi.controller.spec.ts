import { Test, TestingModule } from '@nestjs/testing';
import { LinkAplikasiController } from './link-aplikasi.controller';

describe('LinkAplikasiController', () => {
  let controller: LinkAplikasiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkAplikasiController],
    }).compile();

    controller = module.get<LinkAplikasiController>(LinkAplikasiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
