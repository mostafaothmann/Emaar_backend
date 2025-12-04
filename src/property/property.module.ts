import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { CustomerPropertyOfferModule } from 'src/customer-property-offer/customer-property-offer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Property]),CustomerPropertyOfferModule],
  controllers: [PropertyController],
  providers: [PropertyService],
  exports:[PropertyService]
})
export class PropertyModule {}
