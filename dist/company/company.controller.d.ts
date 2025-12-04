import { Company } from 'src/company/entities/company.entity';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyDto } from './dto/create-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CompanyDto): Promise<Company>;
    findAll(): Promise<Company[]>;
    findOne(id: string): Promise<Company | null>;
    update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company | null>;
    remove(id: string): Promise<void>;
}
