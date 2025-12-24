import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { CustomerPropertyOfferModule } from 'src/customer-property-offer/customer-property-offer.module';
import { ImageController } from 'src/image.controller';
import { CloudinaryService } from 'src/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Property]),CustomerPropertyOfferModule],
  controllers: [PropertyController,ImageController],
  providers: [PropertyService,CloudinaryService],
  exports:[PropertyService]
})
export class PropertyModule {}
