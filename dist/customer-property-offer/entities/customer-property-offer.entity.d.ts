import { Customer } from './../../customer/entities/customer.entity';
import { Property } from 'src/property/entities/property.entity';
export declare class CustomerPropertyOffer {
    Customerid: number;
    Propertyid: number;
    date: Date;
    budget: number;
    description: string;
    owner_customer_comment: string;
    isActive: number;
    endDate: Date;
    customer: Customer;
    property: Property;
}
