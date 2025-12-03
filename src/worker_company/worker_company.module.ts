import { Module } from '@nestjs/common';
import { WorkerCompanyService } from './worker_company.service';
import { WorkerCompanyController } from './worker_company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerCompany } from './entities/worker_company.entity';
import { Company } from 'src/company/entities/company.entity';
import { Worker } from 'src/worker/entities/worker.entity';
@Module({
  imports: [TypeOrmModule.forFeature([WorkerCompany, Worker, Company])],  // 👈 this is required
  controllers: [WorkerCompanyController],
  providers: [WorkerCompanyService],
})
export class WorkerCompanyModule {}
