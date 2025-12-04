import { Test, TestingModule } from '@nestjs/testing';
import { PStatusService } from './p-status.service';

describe('PStatusService', () => {
  let service: PStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PStatusService],
    }).compile();

    service = module.get<PStatusService>(PStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
