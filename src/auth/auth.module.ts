import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomerModule } from 'src/customer/customer.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/auth/configs/jwt-secret';
import { CompanyModule } from 'src/company/company.module';
import { AuthCompanyController } from './authCompany.controller';
import { AuthCustomerController } from './authCustomer.controller';
import { AuthWorkerController } from './authWorker.controller';
import { WorkerModule } from 'src/worker/worker.module';

@Module({
  imports: [
    CustomerModule,
    CompanyModule,
    WorkerModule,
    JwtModule.register({
      global:true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),], 
  controllers: [
    AuthController,
    AuthCompanyController,
    AuthCustomerController,
    AuthWorkerController],
  providers: [AuthService],
  exports: [AuthService],

})
export class AuthModule {}
