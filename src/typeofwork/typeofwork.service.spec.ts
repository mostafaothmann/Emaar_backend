import { Test, TestingModule } from '@nestjs/testing';
import { TypeofworkService } from './typeofwork.service';

describe('TypeofworkService', () => {
  let service: TypeofworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeofworkService],
    }).compile();

    service = module.get<TypeofworkService>(TypeofworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
