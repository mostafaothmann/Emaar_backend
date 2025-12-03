import { Test, TestingModule } from '@nestjs/testing';
import { UnderGovernorateService } from './under-governorate.service';

describe('UnderGovernorateService', () => {
  let service: UnderGovernorateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnderGovernorateService],
    }).compile();

    service = module.get<UnderGovernorateService>(UnderGovernorateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
