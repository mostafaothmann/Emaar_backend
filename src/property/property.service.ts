import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { PropertyDto } from './dto/create-property.dto';
import { CustomerPropertyOffer } from 'src/customer-property-offer/entities/customer-property-offer.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>
  ) { }

  create(dto: PropertyDto): Promise<Property> {
    const property = this.propertyRepository.create(dto);
    return this.propertyRepository.save(property);
  }

  findAll(): Promise<Property[]> {
    return this.propertyRepository.find();
  }

  findOne(id: number): Promise<Property | null> {
    return this.propertyRepository.findOne({
      where: { id },
      relations: ['customerPropertiesOffer'], // 👈 this loads the related properties
    });
  }

  async update(id: number, updateDto: UpdatePropertyDto): Promise<Property | null> {
    await this.propertyRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.propertyRepository.delete(id);
  }
  //to get properties for customer
  async findPropertiesByCustomer(customerId: number) {
    return this.propertyRepository.find({
      where: { customer: { id: customerId } },
    });
  }
  //to get By Search
  async findBySearch (searchQuery:string){
    return (await this.propertyRepository.find()).filter(item => item.description.includes(searchQuery))
  }
}