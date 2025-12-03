import { Module } from '@nestjs/common';
import { CustomerCompanyService } from './customer_company.service';
import { CustomerCompanyController } from './customer_company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerCompany } from './entities/customer_company.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Company } from 'src/company/entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerCompany, Customer, Company])],  // 👈 this is required
  controllers: [CustomerCompanyController],
  providers: [CustomerCompanyService],
})
export class CustomerCompanyModule {}
