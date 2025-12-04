import { TypeOfWorkService } from './typeofwork.service';
import { TypeOfWork } from './entities/typeofwork.entity';
export declare class TypeOfWorkController {
    private readonly typeOfWorkService;
    constructor(typeOfWorkService: TypeOfWorkService);
    create(data: Partial<TypeOfWork>): Promise<TypeOfWork>;
    findAll(): Promise<TypeOfWork[]>;
    findOne(id: number): Promise<TypeOfWork>;
    update(id: number, data: Partial<TypeOfWork>): Promise<TypeOfWork>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
