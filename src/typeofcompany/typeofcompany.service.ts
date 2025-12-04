import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateTypeOfCompanyDto } from './dto/update-typeofcompany.dto';
import { TypeOfCompany } from './entities/typeofcompany.entity';
import { TypeOfCompanyDto } from './dto/create-typeofcompany.dto';

@Injectable()
export class TypeOfCompanyService {
  constructor(
    @InjectRepository(TypeOfCompany)
    private readonly typeOfCompanyRepository: Repository<TypeOfCompany>,
  ) {}

  create(dto: TypeOfCompanyDto): Promise<TypeOfCompany> {
    const type = this.typeOfCompanyRepository.create(dto);
    return this.typeOfCompanyRepository.save(type);
  }

  findAll(): Promise<TypeOfCompany[]> {
    return this.typeOfCompanyRepository.find();
  }

  findOne(id: number): Promise<TypeOfCompany | null> {
    return this.typeOfCompanyRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateTypeOfCompanyDto): Promise<TypeOfCompany | null> {
    await this.typeOfCompanyRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.typeOfCompanyRepository.delete(id);
  }
}
