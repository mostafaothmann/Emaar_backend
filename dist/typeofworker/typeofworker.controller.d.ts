import { TypeOfWorkerDto } from './dto/create-typeofworker.dto';
import { TypeOfWorkerService } from './typeofworker.service';
import { UpdateTypeOfWorkerDto } from './dto/update-typeofworker.dto';
export declare class TypeofworkerController {
    private readonly typeofworkerService;
    constructor(typeofworkerService: TypeOfWorkerService);
    create(typeOfWorkerDto: TypeOfWorkerDto): Promise<import("./entities/typeofworker.entity").TypeOfWorker>;
    findAll(): Promise<import("./entities/typeofworker.entity").TypeOfWorker[]>;
    findOne(id: string): Promise<import("./entities/typeofworker.entity").TypeOfWorker | null>;
    update(id: string, updateTypeofworkerDto: UpdateTypeOfWorkerDto): Promise<import("./entities/typeofworker.entity").TypeOfWorker | null>;
    remove(id: string): Promise<void>;
}
