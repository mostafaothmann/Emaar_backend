import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfPropertyService } from './typeofproperty.service';

describe('TypeofpropertyService', () => {
  let service: TypeOfPropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfPropertyService],
    }).compile();

    service = module.get<TypeOfPropertyService>(TypeOfPropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
