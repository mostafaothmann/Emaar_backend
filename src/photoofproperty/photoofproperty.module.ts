import { Module } from '@nestjs/common';
import { PhotoofpropertyController } from './photoofproperty.controller';
import { PhotoOfPropertyService } from './photoofproperty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoOfProperty } from './entities/photoofproperty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoOfProperty])],
  controllers: [PhotoofpropertyController],
  providers: [PhotoOfPropertyService],
})
export class PhotoofpropertyModule {}
