import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateTypeOfMaterialDto } from './dto/update-typeofmaterial.dto';
import { TypeOfMaterial } from './entities/typeofmaterial.entity';
import { TypeOfMaterialDto } from './dto/create-typeofmaterial.dto';

@Injectable()
export class TypeOfMaterialService {
  constructor(
    @InjectRepository(TypeOfMaterial)
    private readonly typeOfMaterialRepository: Repository<TypeOfMaterial>,
  ) {}

  create(dto: TypeOfMaterialDto): Promise<TypeOfMaterial> {
    const type = this.typeOfMaterialRepository.create(dto);
    return this.typeOfMaterialRepository.save(type);
  }

  findAll(): Promise<TypeOfMaterial[]> {
    return this.typeOfMaterialRepository.find();
  }

  findOne(id: number): Promise<TypeOfMaterial | null> {
    return this.typeOfMaterialRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateTypeOfMaterialDto): Promise<TypeOfMaterial | null> {
    await this.typeOfMaterialRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.typeOfMaterialRepository.delete(id);
  }
}
