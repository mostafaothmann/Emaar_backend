import { Module } from '@nestjs/common';
import { CustomerPropertyOfferController } from './customer-property-offer.controller';
import { CustomerPropertyOfferService } from './customer-property-offer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerPropertyOffer } from './entities/customer-property-offer.entity';
import { Property } from 'src/property/entities/property.entity';
import { Customer } from 'src/customer/entities/customer.entity';


@Module({
    imports: [TypeOrmModule.forFeature([CustomerPropertyOffer, Property, Customer])],  // 👈 this is required
  controllers: [CustomerPropertyOfferController],
  providers: [CustomerPropertyOfferService],
  exports:[CustomerPropertyOfferService]
})
export class CustomerPropertyOfferModule {}
