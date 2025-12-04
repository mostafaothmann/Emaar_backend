import { Repository } from 'typeorm';
import { UpdateTypeOfPropertyDto } from './dto/update-typeofproperty.dto';
import { TypeOfProperty } from './entities/typeofproperty.entity';
import { TypeOfPropertyDto } from './dto/create-typeofproperty.dto';
export declare class TypeOfPropertyService {
    private readonly typeOfPropertyRepository;
    constructor(typeOfPropertyRepository: Repository<TypeOfProperty>);
    create(dto: TypeOfPropertyDto): Promise<TypeOfProperty>;
    findAll(): Promise<TypeOfProperty[]>;
    findOne(id: number): Promise<TypeOfProperty | null>;
    update(id: number, updateDto: UpdateTypeOfPropertyDto): Promise<TypeOfProperty | null>;
    remove(id: number): Promise<void>;
}
