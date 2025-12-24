import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { PropertyModule } from 'src/property/property.module';
import { CustomerPropertyOfferModule } from 'src/customer-property-offer/customer-property-offer.module';


@Module({
  imports: [TypeOrmModule.forFeature([Customer]), PropertyModule, CustomerPropertyOfferModule],  // 👈 this is required
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService], // ✅ must export

})
export class CustomerModule { }
