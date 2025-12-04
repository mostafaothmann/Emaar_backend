import { TypeOfCompanyService } from './typeofcompany.service';
import { TypeOfCompanyDto } from './dto/create-typeofcompany.dto';
import { UpdateTypeOfCompanyDto } from './dto/update-typeofcompany.dto';
export declare class TypeofcompanyController {
    private readonly typeofcompanyService;
    constructor(typeofcompanyService: TypeOfCompanyService);
    create(typeofcompanyDto: TypeOfCompanyDto): Promise<import("./entities/typeofcompany.entity").TypeOfCompany>;
    findAll(): Promise<import("./entities/typeofcompany.entity").TypeOfCompany[]>;
    findOne(id: string): Promise<import("./entities/typeofcompany.entity").TypeOfCompany | null>;
    update(id: string, updateTypeofcompanyDto: UpdateTypeOfCompanyDto): Promise<import("./entities/typeofcompany.entity").TypeOfCompany | null>;
    remove(id: string): Promise<void>;
}
