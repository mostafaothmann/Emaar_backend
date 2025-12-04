import { Test, TestingModule } from '@nestjs/testing';
import { CompanyPropertyOfferController } from './company_property_offer.controller';
import { CompanyPropertyOfferService } from './company_property_offer.service';

describe('CompanyPropertyOfferController', () => {
  let controller: CompanyPropertyOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyPropertyOfferController],
      providers: [CompanyPropertyOfferService],
    }).compile();

    controller = module.get<CompanyPropertyOfferController>(CompanyPropertyOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
