import { Repository } from 'typeorm';
import { CompanyPropertyOffer } from './entities/company_property_offer.entity';
export declare class CompanyPropertyOfferService {
    private readonly offerRepository;
    constructor(offerRepository: Repository<CompanyPropertyOffer>);
    create(data: Partial<CompanyPropertyOffer>): Promise<CompanyPropertyOffer>;
    findAll(): Promise<CompanyPropertyOffer[]>;
    findOne(companyId: number, propertyId: number): Promise<CompanyPropertyOffer>;
    update(companyId: number, propertyId: number, data: Partial<CompanyPropertyOffer>): Promise<CompanyPropertyOffer>;
    remove(companyId: number, propertyId: number): Promise<void>;
}
