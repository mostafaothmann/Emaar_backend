import { CustomerPropertyOfferService } from './../customer-property-offer/customer-property-offer.service';
import { CustomerPropertyOffer } from './../customer-property-offer/entities/customer-property-offer.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { PropertyService } from './../property/property.service';
import { CustomerService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerDto } from './dto/create-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    private readonly PropertyService;
    private readonly CustomerPropertyOfferService;
    constructor(customerService: CustomerService, PropertyService: PropertyService, CustomerPropertyOfferService: CustomerPropertyOfferService);
    create(createCustomerDto: CustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer | null>;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer | null>;
    remove(id: number): Promise<void>;
    getPropertiesByCustomer(id: number): Promise<import("../property/entities/property.entity").Property[]>;
    getOffersByCustomer(id: number): Promise<CustomerPropertyOffer[]>;
}
