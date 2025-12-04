import { Controller, Post, Body, Param, Get, Delete, Patch } from '@nestjs/common';
import { CustomerCompanyService } from './customer_company.service';

@Controller('customer-company')
export class CustomerCompanyController {
  constructor(private readonly service: CustomerCompanyService) {}

  @Post(':customerId/:companyId')
  async link(
    @Param('customerId') customerId: number,
    @Param('companyId') companyId: number,
    @Body('startingDate') startingDate?: string,
  ) {
    return this.service.linkCustomerToCompany(
      +customerId,
      +companyId,
      startingDate ? new Date(startingDate) : undefined,
    );
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get('customer/:customerId')
  async findByCustomer(@Param('customerId') customerId: number) {
    return this.service.findByCustomer(+customerId);
  }

  @Get('company/:companyId')
  async findByCompany(@Param('companyId') companyId: number) {
    return this.service.findByCompany(+companyId);
  }

  @Delete(':customerId/:companyId')
  async unlink(
    @Param('customerId') customerId: number,
    @Param('companyId') companyId: number,
  ) {
    return this.service.unlinkCustomerFromCompany(+customerId, +companyId);
  }

  

  @Patch(':customerId/:companyId')
  async updateStartingDate(
    @Param('customerId') customerId: number,
    @Param('companyId') companyId: number,
    @Body('startingDate') startingDate: string,
  ) {
    return this.service.updateStartingDate(
      +customerId,
      +companyId,
      new Date(startingDate),
    );
  }
}
