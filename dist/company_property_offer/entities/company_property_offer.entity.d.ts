import { Property } from 'src/property/entities/property.entity';
import { Company } from './../../company/entities/company.entity';
export declare class CompanyPropertyOffer {
    Companyid: number;
    Propertyid: number;
    date: Date;
    budget: number;
    description: string;
    customer_comment: string;
    isActive: number;
    endDate: Date;
    company: Company;
    property: Property;
}
