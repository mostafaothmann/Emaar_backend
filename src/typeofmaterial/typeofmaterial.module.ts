import { Module } from '@nestjs/common';
import { TypeofmaterialController } from './typeofmaterial.controller';
import { TypeOfMaterialService } from './typeofmaterial.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfMaterial } from './entities/typeofmaterial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfMaterial])],  // 👈 this is required
  controllers: [TypeofmaterialController],
  providers: [TypeOfMaterialService],
})
export class TypeofmaterialModule {}
