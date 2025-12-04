import { Module } from '@nestjs/common';
import { TypeofcompanyController } from './typeofcompany.controller';
import { TypeOfCompanyService } from './typeofcompany.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfCompany } from './entities/typeofcompany.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfCompany])],  // 👈 this is required
  controllers: [TypeofcompanyController],
  providers: [TypeOfCompanyService],
})
export class TypeOfCompanyModule {}
