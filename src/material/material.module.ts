import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { Company } from 'src/company/entities/company.entity';
import { TypeOfMaterial } from 'src/typeofmaterial/entities/typeofmaterial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Material,Company,TypeOfMaterial])],  // 👈 this is required
  controllers: [MaterialController],
  providers: [MaterialService],
})
export class MaterialModule {}
