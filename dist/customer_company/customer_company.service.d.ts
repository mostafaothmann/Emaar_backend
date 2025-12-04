import { Repository } from 'typeorm';
import { CustomerCompany } from './entities/customer_company.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Company } from 'src/company/entities/company.entity';
export declare class CustomerCompanyService {
    private readonly customerCompanyRepo;
    private readonly customerRepo;
    private readonly companyRepo;
    constructor(customerCompanyRepo: Repository<CustomerCompany>, customerRepo: Repository<Customer>, companyRepo: Repository<Company>);
    linkCustomerToCompany(customerId: number, companyId: number, startingDate?: Date): Promise<CustomerCompany>;
    findAll(): Promise<CustomerCompany[]>;
    findByCustomer(customerId: number): Promise<CustomerCompany[]>;
    findByCompany(companyId: number): Promise<CustomerCompany[]>;
    unlinkCustomerFromCompany(customerId: number, companyId: number): Promise<{
        message: string;
    }>;
    updateStartingDate(customerId: number, companyId: number, startingDate: Date): Promise<CustomerCompany>;
}
