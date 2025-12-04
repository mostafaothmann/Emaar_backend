import { CustomerPropertyOffer } from 'src/customer-property-offer/entities/customer-property-offer.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { PStatus } from 'src/p_status/entities/p-status.entity';
import { TypeOfProperty } from 'src/typeofproperty/entities/typeofproperty.entity';
import { TypeOfOwnering } from 'src/typeofwnering/entities/typeofownering.entity';
import { TypeOfWork } from 'src/typeofwork/entities/typeofwork.entity';
export declare class Property {
    id: number;
    height: string;
    minimum_budget: string;
    maximum_time: string;
    direction: string;
    location: string;
    age: number;
    description: string;
    area: number;
    isActive: number;
    typeOfPropertyId: number;
    typeOfOwneringId: number;
    typeOfWorkId: number;
    pstatusId: number;
    customerId: number;
    typeOfProperty: TypeOfProperty;
    typeOfOwnering: TypeOfOwnering;
    typeOfWork: TypeOfWork;
    pstatus: PStatus;
    customer: Customer;
    customerPropertiesOffer: CustomerPropertyOffer[];
}
