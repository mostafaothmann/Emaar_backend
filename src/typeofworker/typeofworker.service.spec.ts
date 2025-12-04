import { Test, TestingModule } from '@nestjs/testing';
import { TypeofworkerService } from './typeofworker.service';

describe('TypeofworkerService', () => {
  let service: TypeofworkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeofworkerService],
    }).compile();

    service = module.get<TypeofworkerService>(TypeofworkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
