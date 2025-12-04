import { CompanyPropertyOfferService } from './company_property_offer.service';
import { CompanyPropertyOffer } from './entities/company_property_offer.entity';
export declare class CompanyPropertyOfferController {
    private readonly offerService;
    constructor(offerService: CompanyPropertyOfferService);
    create(data: Partial<CompanyPropertyOffer>): Promise<CompanyPropertyOffer>;
    findAll(): Promise<CompanyPropertyOffer[]>;
    findOne(companyId: number, propertyId: number): Promise<CompanyPropertyOffer>;
    update(companyId: number, propertyId: number, data: Partial<CompanyPropertyOffer>): Promise<CompanyPropertyOffer>;
    remove(companyId: number, propertyId: number): Promise<void>;
}
