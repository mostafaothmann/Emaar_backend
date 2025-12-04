import { Company } from 'src/company/entities/company.entity';
import { Customer } from 'src/customer/entities/customer.entity';
export declare class CustomerCompany {
    Customerid: number;
    Companyid: number;
    customer: Customer;
    company: Company;
    startingDate: Date;
}
