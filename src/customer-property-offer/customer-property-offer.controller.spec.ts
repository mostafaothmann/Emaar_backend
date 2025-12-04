import { Test, TestingModule } from '@nestjs/testing';
import { CustomerPropertyOfferController } from './customer-property-offer.controller';
import { CustomerPropertyOfferService } from './customer-property-offer.service';

describe('CustomerPropertyOfferController', () => {
  let controller: CustomerPropertyOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerPropertyOfferController],
      providers: [CustomerPropertyOfferService],
    }).compile();

    controller = module.get<CustomerPropertyOfferController>(CustomerPropertyOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
