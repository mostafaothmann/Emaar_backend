import { Repository } from 'typeorm';
import { UpdateTypeOfCompanyDto } from './dto/update-typeofcompany.dto';
import { TypeOfCompany } from './entities/typeofcompany.entity';
import { TypeOfCompanyDto } from './dto/create-typeofcompany.dto';
export declare class TypeOfCompanyService {
    private readonly typeOfCompanyRepository;
    constructor(typeOfCompanyRepository: Repository<TypeOfCompany>);
    create(dto: TypeOfCompanyDto): Promise<TypeOfCompany>;
    findAll(): Promise<TypeOfCompany[]>;
    findOne(id: number): Promise<TypeOfCompany | null>;
    update(id: number, updateDto: UpdateTypeOfCompanyDto): Promise<TypeOfCompany | null>;
    remove(id: number): Promise<void>;
}
