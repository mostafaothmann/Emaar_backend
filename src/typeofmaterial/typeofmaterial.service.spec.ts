import { Test, TestingModule } from '@nestjs/testing';
import { TypeofmaterialService } from './typeofmaterial.service';

describe('TypeofmaterialService', () => {
  let service: TypeofmaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeofmaterialService],
    }).compile();

    service = module.get<TypeofmaterialService>(TypeofmaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
