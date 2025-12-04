import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdatePhotoOfMaterialDto } from './dto/update-photoofmaterial.dto';
import { PhotoOfMaterial } from './entities/photoofmaterial.entity';
import { PhotoOfMaterialDto } from './dto/create-photoofmaterial.dto';

@Injectable()
export class PhotoOfMaterialService {
  constructor(
    @InjectRepository(PhotoOfMaterial)
    private readonly photoOfMaterialRepository: Repository<PhotoOfMaterial>,
  ) {}

  create(dto: PhotoOfMaterialDto): Promise<PhotoOfMaterial> {
    const photo = this.photoOfMaterialRepository.create(dto);
    return this.photoOfMaterialRepository.save(photo);
  }

  findAll(): Promise<PhotoOfMaterial[]> {
    return this.photoOfMaterialRepository.find();
  }

  findOne(id: number): Promise<PhotoOfMaterial | null> {
    return this.photoOfMaterialRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdatePhotoOfMaterialDto): Promise<PhotoOfMaterial | null> {
    await this.photoOfMaterialRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.photoOfMaterialRepository.delete(id);
  }
}
