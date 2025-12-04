import { Test, TestingModule } from '@nestjs/testing';
import { TypeofwneringService } from './typeofownering.service';

describe('TypeofwneringService', () => {
  let service: TypeofwneringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeofwneringService],
    }).compile();

    service = module.get<TypeofwneringService>(TypeofwneringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
