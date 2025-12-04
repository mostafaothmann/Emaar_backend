import { CustomerPropertyOffer } from './entities/customer-property-offer.entity';
import { Repository } from 'typeorm';
export declare class CustomerPropertyOfferService {
    private readonly customerPropertyOfferRepository;
    constructor(customerPropertyOfferRepository: Repository<CustomerPropertyOffer>);
    create(data: Partial<CustomerPropertyOffer>): Promise<CustomerPropertyOffer>;
    findAll(): Promise<CustomerPropertyOffer[]>;
    findOne(customerId: number, propertyId: number): Promise<CustomerPropertyOffer>;
    update(customerId: number, propertyId: number, data: Partial<CustomerPropertyOffer>): Promise<CustomerPropertyOffer>;
    remove(custoemrId: number, propertyId: number): Promise<void>;
    findOffersByCustomer(customerId: number): Promise<CustomerPropertyOffer[]>;
}
