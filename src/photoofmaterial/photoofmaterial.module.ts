import { Module } from '@nestjs/common';
import { PhotoofmaterialController } from './photoofmaterial.controller';
import { PhotoOfMaterialService } from './photoofmaterial.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoOfProperty } from 'src/photoofproperty/entities/photoofproperty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoOfProperty])],
  controllers: [PhotoofmaterialController],
  providers: [PhotoOfMaterialService],
})
export class PhotoofmaterialModule {}
