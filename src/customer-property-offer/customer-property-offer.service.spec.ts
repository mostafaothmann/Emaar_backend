import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPropertyOfferService } from './customer-property-offer.service';

describe('CustomerPropertyOfferService', () => {
  let service: CustomerPropertyOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerPropertyOfferService],
    }).compile();

    service = module.get<CustomerPropertyOfferService>(CustomerPropertyOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
