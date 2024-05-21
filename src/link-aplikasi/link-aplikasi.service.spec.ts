import { Test, TestingModule } from '@nestjs/testing';
import { LinkAplikasiService } from './link-aplikasi.service';

describe('LinkAplikasiService', () => {
  let service: LinkAplikasiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkAplikasiService],
    }).compile();

    service = module.get<LinkAplikasiService>(LinkAplikasiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
