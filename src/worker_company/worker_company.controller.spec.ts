import { Test, TestingModule } from '@nestjs/testing';
import { WorkerCompanyController } from './worker_company.controller';
import { WorkerCompanyService } from './worker_company.service';

describe('WorkerCompanyController', () => {
  let controller: WorkerCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkerCompanyController],
      providers: [WorkerCompanyService],
    }).compile();

    controller = module.get<WorkerCompanyController>(WorkerCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
