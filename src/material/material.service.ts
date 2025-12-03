import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateMaterialDto } from './dto/update-material.dto';
import { MaterialDto } from './dto/create-material.dto';
import { Material } from './entities/material.entity';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(Material)
    private readonly materialRepository: Repository<Material>,
  ) {}

  create(dto: MaterialDto): Promise<Material> {
    const material = this.materialRepository.create(dto);
    return this.materialRepository.save(material);
  }

  findAll(): Promise<Material[]> {
    return this.materialRepository.find();
  }

  findOne(id: number): Promise<Material | null> {
    return this.materialRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateMaterialDto): Promise<Material | null> {
    await this.materialRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.materialRepository.delete(id);
  }
}
