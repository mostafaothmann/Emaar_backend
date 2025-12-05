import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { TypeOfCompanyModule } from './typeofcompany/typeofcompany.module';
import { PStatusModule } from './p_status/p-status.module';
import { TypeofpropertyModule } from './typeofproperty/typeofproperty.module';
import { TypeofworkerModule } from './typeofworker/typeofworker.module';
import { WorkerModule } from './worker/worker.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerCompanyModule } from './customer_company/customer_company.module';
import { MaterialModule } from './material/material.module';
import { TypeofmaterialModule } from './typeofmaterial/typeofmaterial.module';
import { TypeofworkModule } from './typeofwork/typeofwork.module';
import { TypeofOwneringModule } from './typeofwnering/typeofownering.module';
import { PropertyModule } from './property/property.module';
import { VideoofpropertyModule } from './videoofproperty/videoofproperty.module';
import { PhotoofpropertyModule } from './photoofproperty/photoofproperty.module';
import { WorkerCompanyModule } from './worker_company/worker_company.module';
import { CompanyPropertyOfferModule } from './company_property_offer/company_property_offer.module';
import { AuthModule } from './auth/auth.module';
import { CustomerPropertyOfferModule } from './customer-property-offer/customer-property-offer.module';
import { GovernorateModule } from './governorate/governorate.module';
import { UnderGovernorateModule } from './under-governorate/under-governorate.module';
require("dotenv").config();
const DBurl=`mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQL_DATABASE}`
@Module({
  imports: [
    TypeOrmModule.forRoot({
 type: 'mysql',
  url: 'mysql://root:yCcXCuIguQstUJuVXfTysQacslrVnWhu@mysql.railway.internal:3306/railway',
  autoLoadEntities: true,
  synchronize: true,
    }),
    PStatusModule,
    CompanyModule,
    TypeOfCompanyModule,
    TypeofpropertyModule,
    TypeofworkModule,
    TypeofOwneringModule,
    VideoofpropertyModule,
    PhotoofpropertyModule,
    TypeofworkerModule,
    WorkerModule,
    CustomerModule,
    CustomerCompanyModule,
    PropertyModule,
    MaterialModule,
    TypeofmaterialModule,
    GovernorateModule,
    UnderGovernorateModule,
    WorkerCompanyModule,
    CompanyPropertyOfferModule,
    AuthModule,
    CustomerPropertyOfferModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
