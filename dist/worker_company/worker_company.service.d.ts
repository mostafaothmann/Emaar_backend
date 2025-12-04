import { Repository } from 'typeorm';
import { Worker } from 'src/worker/entities/worker.entity';
import { Company } from 'src/company/entities/company.entity';
import { WorkerCompany } from './entities/worker_company.entity';
export declare class WorkerCompanyService {
    private readonly workerCompanyRepo;
    private readonly workerRepo;
    private readonly companyRepo;
    constructor(workerCompanyRepo: Repository<WorkerCompany>, workerRepo: Repository<Worker>, companyRepo: Repository<Company>);
    assignWorkerToCompany(workerId: number, companyId: number, startDate?: Date, endDate?: Date): Promise<WorkerCompany>;
    updateAssignment(workerId: number, companyId: number, startDate?: Date, endDate?: Date): Promise<WorkerCompany>;
    findAll(): Promise<WorkerCompany[]>;
    findByWorker(workerId: number): Promise<WorkerCompany[]>;
    findByCompany(companyId: number): Promise<WorkerCompany[]>;
    removeAssignment(workerId: number, companyId: number): Promise<{
        message: string;
    }>;
}
