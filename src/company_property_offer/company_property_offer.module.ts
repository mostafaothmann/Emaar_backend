import { Module } from '@nestjs/common';
import { CompanyPropertyOfferService } from './company_property_offer.service';
import { CompanyPropertyOfferController } from './company_property_offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyPropertyOffer } from './entities/company_property_offer.entity';
import { Property } from 'src/property/entities/property.entity';
import { Company } from 'src/company/entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyPropertyOffer, Property, Company])],  // 👈 this is required
  controllers: [CompanyPropertyOfferController],
  providers: [CompanyPropertyOfferService],
})
export class CompanyPropertyOfferModule {}
