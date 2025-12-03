import { Test, TestingModule } from '@nestjs/testing';
import { CustomerCompanyController } from './customer_company.controller';
import { CustomerCompanyService } from './customer_company.service';

describe('CustomerCompanyController', () => {
  let controller: CustomerCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerCompanyController],
      providers: [CustomerCompanyService],
    }).compile();

    controller = module.get<CustomerCompanyController>(CustomerCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
