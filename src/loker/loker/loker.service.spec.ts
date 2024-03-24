import { Test, TestingModule } from '@nestjs/testing';
import { LokerService } from './loker.service';

describe('LokerService', () => {
  let service: LokerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LokerService],
    }).compile();

    service = module.get<LokerService>(LokerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
