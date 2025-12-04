import { WorkerCompanyService } from './worker_company.service';
export declare class WorkerCompanyController {
    private readonly workerCompanyService;
    constructor(workerCompanyService: WorkerCompanyService);
    assign(workerId: number, companyId: number, startDate?: Date, endDate?: Date): Promise<import("./entities/worker_company.entity").WorkerCompany>;
    update(workerId: number, companyId: number, startDate?: Date, endDate?: Date): Promise<import("./entities/worker_company.entity").WorkerCompany>;
    findAll(): Promise<import("./entities/worker_company.entity").WorkerCompany[]>;
    findByWorker(workerId: number): Promise<import("./entities/worker_company.entity").WorkerCompany[]>;
    findByCompany(companyId: number): Promise<import("./entities/worker_company.entity").WorkerCompany[]>;
    remove(workerId: number, companyId: number): Promise<{
        message: string;
    }>;
}
