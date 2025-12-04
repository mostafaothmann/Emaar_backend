import { CustomerPropertyOfferService } from './customer-property-offer.service';
import { CustomerPropertyOffer } from './entities/customer-property-offer.entity';
export declare class CustomerPropertyOfferController {
    private readonly offerService;
    constructor(offerService: CustomerPropertyOfferService);
    create(data: Partial<CustomerPropertyOffer>): Promise<CustomerPropertyOffer>;
    findAll(): Promise<CustomerPropertyOffer[]>;
    findOne(customerId: number, propertyId: number): Promise<CustomerPropertyOffer>;
    update(customerId: number, propertyId: number, data: Partial<CustomerPropertyOffer>): Promise<CustomerPropertyOffer>;
    remove(customerId: number, propertyId: number): Promise<void>;
}
