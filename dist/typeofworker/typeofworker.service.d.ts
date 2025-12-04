import { Repository } from 'typeorm';
import { UpdateTypeOfWorkerDto } from './dto/update-typeofworker.dto';
import { TypeOfWorker } from './entities/typeofworker.entity';
import { TypeOfWorkerDto } from './dto/create-typeofworker.dto';
export declare class TypeOfWorkerService {
    private readonly typeOfWorkerRepository;
    constructor(typeOfWorkerRepository: Repository<TypeOfWorker>);
    create(dto: TypeOfWorkerDto): Promise<TypeOfWorker>;
    findAll(): Promise<TypeOfWorker[]>;
    findOne(id: number): Promise<TypeOfWorker | null>;
    update(id: number, updateDto: UpdateTypeOfWorkerDto): Promise<TypeOfWorker | null>;
    remove(id: number): Promise<void>;
}
