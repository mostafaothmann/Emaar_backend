import { Company } from 'src/company/entities/company.entity';
import { Worker } from './../../worker/entities/worker.entity';
export declare class WorkerCompany {
    Workerid: number;
    Companyid: number;
    startDate: Date;
    endDate: Date;
    worker: Worker;
    company: Company;
}
