import { Repository } from 'typeorm';
import { TypeOfWork } from './entities/typeofwork.entity';
export declare class TypeOfWorkService {
    private readonly typeOfWorkRepo;
    constructor(typeOfWorkRepo: Repository<TypeOfWork>);
    create(data: Partial<TypeOfWork>): Promise<TypeOfWork>;
    findAll(): Promise<TypeOfWork[]>;
    findOne(id: number): Promise<TypeOfWork>;
    update(id: number, data: Partial<TypeOfWork>): Promise<TypeOfWork>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
