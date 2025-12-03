import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { CompanyPropertyOfferService } from './company_property_offer.service';
import { CompanyPropertyOffer } from './entities/company_property_offer.entity';


@Controller('company-property-offers')
export class CompanyPropertyOfferController {
  constructor(private readonly offerService: CompanyPropertyOfferService) {}

  @Post()
  create(@Body() data: Partial<CompanyPropertyOffer>) {
    return this.offerService.create(data);
  }

  @Get()
  findAll() {
    return this.offerService.findAll();
  }

  @Get(':companyId/:propertyId')
  findOne(
    @Param('companyId') companyId: number,
    @Param('propertyId') propertyId: number,
  ) {
    return this.offerService.findOne(companyId, propertyId);
  }

  @Patch(':companyId/:propertyId')
  update(
    @Param('companyId') companyId: number,
    @Param('propertyId') propertyId: number,
    @Body() data: Partial<CompanyPropertyOffer>,
  ) {
    return this.offerService.update(companyId, propertyId, data);
  }

  @Delete(':companyId/:propertyId')
  remove(
    @Param('companyId') companyId: number,
    @Param('propertyId') propertyId: number,
  ) {
    return this.offerService.remove(companyId, propertyId);
  }
}
