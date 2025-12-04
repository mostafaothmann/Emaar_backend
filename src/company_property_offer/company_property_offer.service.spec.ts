import { Test, TestingModule } from '@nestjs/testing';
import { CompanyPropertyOfferService } from './company_property_offer.service';

describe('CompanyPropertyOfferService', () => {
  let service: CompanyPropertyOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyPropertyOfferService],
    }).compile();

    service = module.get<CompanyPropertyOfferService>(CompanyPropertyOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
