import { WorkerService } from './worker.service';
import { WorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
export declare class WorkerController {
    private readonly workerService;
    constructor(workerService: WorkerService);
    create(createWorkerDto: WorkerDto): Promise<import("./entities/worker.entity").Worker>;
    findAll(): Promise<import("./entities/worker.entity").Worker[]>;
    findOne(id: string): Promise<import("./entities/worker.entity").Worker | null>;
    update(id: string, updateWorkerDto: UpdateWorkerDto): Promise<import("./entities/worker.entity").Worker | null>;
    remove(id: string): Promise<void>;
}
