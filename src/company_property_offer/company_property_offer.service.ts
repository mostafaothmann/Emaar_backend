import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyPropertyOffer } from './entities/company_property_offer.entity';


@Injectable()
export class CompanyPropertyOfferService {
  constructor(
    @InjectRepository(CompanyPropertyOffer)
    private readonly offerRepository: Repository<CompanyPropertyOffer>,
  ) {}

  async create(data: Partial<CompanyPropertyOffer>): Promise<CompanyPropertyOffer> {
    const offer = this.offerRepository.create(data);
    return this.offerRepository.save(offer);
  }

  async findAll(): Promise<CompanyPropertyOffer[]> {
    return this.offerRepository.find({
      relations: ['company', 'property'],
    });
  }

  async findOne(companyId: number, propertyId: number): Promise<CompanyPropertyOffer> {
    const offer = await this.offerRepository.findOne({
      where: { Companyid: companyId, Propertyid: propertyId },
      relations: ['company', 'property'],
    });
    if (!offer) {
      throw new NotFoundException(`Offer not found for company ${companyId} and property ${propertyId}`);
    }
    return offer;
  }

  async update(companyId: number, propertyId: number, data: Partial<CompanyPropertyOffer>): Promise<CompanyPropertyOffer> {
    const offer = await this.findOne(companyId, propertyId);
    Object.assign(offer, data);
    return this.offerRepository.save(offer);
  }

  async remove(companyId: number, propertyId: number): Promise<void> {
    const offer = await this.findOne(companyId, propertyId);
    await this.offerRepository.remove(offer);
  }
}
