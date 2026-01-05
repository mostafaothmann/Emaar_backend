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
import { MulterModule } from '@nestjs/platform-express'
import { ImageController } from './image.controller';
import { CloudinaryService } from './cloudinary.service';
import { VideoOfProperty } from './videoofproperty/entities/videoofproperty.entity';
require("dotenv").config();
const DBurl = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQL_DATABASE}?ssl-mode=REQUIRED`;

@Module({
  imports: [
    MulterModule.register({ dest: './uploads' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: DBurl,   
      autoLoadEntities: true,
      synchronize: true,
    }),
   UnderGovernorateModule,GovernorateModule,
   AuthModule,CustomerCompanyModule,CustomerModule,VideoOfProperty,CompanyModule,TypeOfCompanyModule,TypeofOwneringModule,TypeofmaterialModule,TypeofpropertyModule,TypeofworkModule,TypeofworkerModule
  ,PStatusModule,PhotoofpropertyModule,CustomerPropertyOfferModule,PropertyModule,PropertyModule,WorkerModule,
  CompanyPropertyOfferModule,WorkerCompanyModule,VideoofpropertyModule,MaterialModule
  ],
  controllers: [AppController, ImageController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}
