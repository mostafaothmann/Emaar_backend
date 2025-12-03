import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateTypeOfPropertyDto } from './dto/update-typeofproperty.dto';
import { TypeOfProperty } from './entities/typeofproperty.entity';
import { TypeOfPropertyDto } from './dto/create-typeofproperty.dto';

@Injectable()
export class TypeOfPropertyService {
  constructor(
    @InjectRepository(TypeOfProperty)
    private readonly typeOfPropertyRepository: Repository<TypeOfProperty>,
  ) {}

  create(dto: TypeOfPropertyDto): Promise<TypeOfProperty> {
    const type = this.typeOfPropertyRepository.create(dto);
    return this.typeOfPropertyRepository.save(type);
  }

  findAll(): Promise<TypeOfProperty[]> {
    return this.typeOfPropertyRepository.find();
  }

  findOne(id: number): Promise<TypeOfProperty | null> {
    return this.typeOfPropertyRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateTypeOfPropertyDto): Promise<TypeOfProperty  | null> {
    await this.typeOfPropertyRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.typeOfPropertyRepository.delete(id);
  }
}
