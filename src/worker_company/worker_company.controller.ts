import { Controller, Post, Get, Delete, Param, Body, Patch } from '@nestjs/common';
import { WorkerCompanyService } from './worker_company.service';

@Controller('worker-company')
export class WorkerCompanyController {
  constructor(private readonly workerCompanyService: WorkerCompanyService) {}

  @Post(':workerId/:companyId')
  assign(
    @Param('workerId') workerId: number,
    @Param('companyId') companyId: number,
    @Body('startDate') startDate?: Date,
    @Body('endDate') endDate?: Date,
  ) {
    return this.workerCompanyService.assignWorkerToCompany(+workerId, +companyId, startDate, endDate);
  }

  @Patch(':workerId/:companyId')
  update(
    @Param('workerId') workerId: number,
    @Param('companyId') companyId: number,
    @Body('startDate') startDate?: Date,
    @Body('endDate') endDate?: Date,
  ) {
    return this.workerCompanyService.updateAssignment(+workerId, +companyId, startDate, endDate);
  }

  @Get()
  findAll() {
    return this.workerCompanyService.findAll();
  }

  @Get('worker/:workerId')
  findByWorker(@Param('workerId') workerId: number) {
    return this.workerCompanyService.findByWorker(+workerId);
  }

  @Get('company/:companyId')
  findByCompany(@Param('companyId') companyId: number) {
    return this.workerCompanyService.findByCompany(+companyId);
  }

  @Delete(':workerId/:companyId')
  remove(
    @Param('workerId') workerId: number,
    @Param('companyId') companyId: number,
  ) {
    return this.workerCompanyService.removeAssignment(+workerId, +companyId);
  }
}
