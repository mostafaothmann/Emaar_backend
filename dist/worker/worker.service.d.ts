import { Repository } from 'typeorm';
import { WorkerDto } from './dto/create-worker.dto';
import { Worker } from './entities/worker.entity';
import { UpdateWorkerDto } from './dto/update-worker.dto';
export declare class WorkerService {
    private readonly workerRepository;
    constructor(workerRepository: Repository<Worker>);
    create(dto: WorkerDto): Promise<Worker>;
    findAll(): Promise<Worker[]>;
    findOne(id: number): Promise<Worker | null>;
    findByEmail(email: string): Promise<Worker | null>;
    update(id: number, updateDto: UpdateWorkerDto): Promise<Worker | null>;
    remove(id: number): Promise<void>;
}
