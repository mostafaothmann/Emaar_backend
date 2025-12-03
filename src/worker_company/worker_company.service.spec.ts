import { Test, TestingModule } from '@nestjs/testing';
import { WorkerCompanyService } from './worker_company.service';

describe('WorkerCompanyService', () => {
  let service: WorkerCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkerCompanyService],
    }).compile();

    service = module.get<WorkerCompanyService>(WorkerCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
