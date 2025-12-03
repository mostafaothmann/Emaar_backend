import { CustomerPropertyOfferService } from './../customer-property-offer/customer-property-offer.service';
import { CustomerPropertyOffer } from './../customer-property-offer/entities/customer-property-offer.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { PropertyService } from './../property/property.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerDto } from './dto/create-customer.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { ROLE } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles/roles/roles.guard';


/* @Roles(ROLE.CUSTOMER)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard) */
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService,
    private readonly PropertyService: PropertyService,
    private readonly CustomerPropertyOfferService: CustomerPropertyOfferService
  ) { }

  @Post()
  create(@Body() createCustomerDto: CustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  //@UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.customerService.remove(+id);
  }

  //Related Properties
  @Get(':id/properties')
  async getPropertiesByCustomer( @Param('id', ParseIntPipe) id: number) {
    return this.PropertyService.findPropertiesByCustomer(+id);
  }
  //Related Offers
  @Get(':id/offers')
  async getOffersByCustomer(  @Param('id', ParseIntPipe) id: number

  ) {
    return this.CustomerPropertyOfferService.findOffersByCustomer(+id);
  }
}
