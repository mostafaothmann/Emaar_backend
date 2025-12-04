import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: Repository<Company>);
    create(companyDto: CompanyDto): Promise<Company>;
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company | null>;
    findByEmail(email: string): Promise<Company | null>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company | null>;
    remove(id: number): Promise<void>;
}
