import { Test, TestingModule } from '@nestjs/testing';
import { CustomerCompanyService } from './customer_company.service';

describe('CustomerCompanyService', () => {
  let service: CustomerCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerCompanyService],
    }).compile();

    service = module.get<CustomerCompanyService>(CustomerCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
