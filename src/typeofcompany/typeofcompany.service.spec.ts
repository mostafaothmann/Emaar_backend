import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfCompanyService } from './typeofcompany.service';

describe('TypeofcompanyService', () => {
  let service: TypeOfCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOfCompanyService],
    }).compile();

    service = module.get<TypeOfCompanyService>(TypeOfCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
