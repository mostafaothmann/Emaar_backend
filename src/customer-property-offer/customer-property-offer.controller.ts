import { Controller, Get, Post, Body, Param, Delete, Put, Patch, ParseIntPipe } from '@nestjs/common';
import { CustomerPropertyOfferService } from './customer-property-offer.service';
import { CustomerPropertyOffer } from './entities/customer-property-offer.entity';


@Controller('customer-property-offer')
export class CustomerPropertyOfferController {
  constructor(private readonly offerService: CustomerPropertyOfferService) {}

  @Post()
  create(@Body() data: Partial<CustomerPropertyOffer>) {
    return this.offerService.create(data);
  }

  @Get()
  findAll() {
    return this.offerService.findAll();
  }

  @Get(':customerId/:propertyId')
  findOne(
    @Param('customerId',ParseIntPipe) customerId: number,
    @Param('propertyId',ParseIntPipe) propertyId: number,
  ) {
    return this.offerService.findOne(customerId, propertyId);
  }

  @Patch(':customerId/:propertyId')
  update(
    @Param('customerId',ParseIntPipe) customerId: number,
    @Param('propertyId',ParseIntPipe) propertyId: number,
    @Body() data: Partial<CustomerPropertyOffer>,
  ) {
    return this.offerService.update(customerId, propertyId, data);
  }

  @Delete(':customerId/:propertyId')
  remove(
    @Param('customerId',ParseIntPipe) customerId: number,
    @Param('propertyId',ParseIntPipe) propertyId: number,
  ) {
    return this.offerService.remove(customerId, propertyId);
  }
}
