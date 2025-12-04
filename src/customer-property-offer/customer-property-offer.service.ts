import { CustomerPropertyOffer } from './entities/customer-property-offer.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class CustomerPropertyOfferService {
  constructor(
    @InjectRepository(CustomerPropertyOffer)
    private readonly customerPropertyOfferRepository: Repository<CustomerPropertyOffer>,

  ) { }

  async create(data: Partial<CustomerPropertyOffer>): Promise<CustomerPropertyOffer> {
    const offer = this.customerPropertyOfferRepository.create(data);
    return this.customerPropertyOfferRepository.save(offer);
  }

  async findAll(): Promise<CustomerPropertyOffer[]> {
    return this.customerPropertyOfferRepository.find({
      relations: ['customer', 'property'],
    });
  }

  async findOne(customerId: number, propertyId: number): Promise<CustomerPropertyOffer> {
    const offer = await this.customerPropertyOfferRepository.findOne({
      where: { Customerid: customerId, Propertyid: propertyId },
      relations: ['customer', 'property'],
    });
    if (!offer) {
      throw new NotFoundException(`Offer not found for customer ${customerId} and property ${propertyId}`);
    }
    return offer;
  }

  async update(customerId: number, propertyId: number, data: Partial<CustomerPropertyOffer>): Promise<CustomerPropertyOffer> {
    const offer = await this.findOne(customerId, propertyId);
    Object.assign(offer, data);
    return this.customerPropertyOfferRepository.save(offer);
  }

  async remove(custoemrId: number, propertyId: number): Promise<void> {
    const offer = await this.findOne(custoemrId, propertyId);
    await this.customerPropertyOfferRepository.remove(offer);
  }
  //to get offers for customer
  async findOffersByCustomer(customerId: number) {
    return this.customerPropertyOfferRepository.find({
      where: { customer: { id: customerId } },
            relations: ['customer','property'],

    });
  }
}
