import { CustomerCompanyService } from './customer_company.service';
export declare class CustomerCompanyController {
    private readonly service;
    constructor(service: CustomerCompanyService);
    link(customerId: number, companyId: number, startingDate?: string): Promise<import("./entities/customer_company.entity").CustomerCompany>;
    findAll(): Promise<import("./entities/customer_company.entity").CustomerCompany[]>;
    findByCustomer(customerId: number): Promise<import("./entities/customer_company.entity").CustomerCompany[]>;
    findByCompany(companyId: number): Promise<import("./entities/customer_company.entity").CustomerCompany[]>;
    unlink(customerId: number, companyId: number): Promise<{
        message: string;
    }>;
    updateStartingDate(customerId: number, companyId: number, startingDate: string): Promise<import("./entities/customer_company.entity").CustomerCompany>;
}
