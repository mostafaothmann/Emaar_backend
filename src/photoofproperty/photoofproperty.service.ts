import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PhotoOfProperty } from "./entities/photoofproperty.entity";
import { Repository } from "typeorm";
import { PhotoOfPropertyDto } from "./dto/create-photoofproperty.dto";
import { UpdatePhotoofpropertyDto } from "./dto/update-photoofproperty.dto";



@Injectable()
export class PhotoOfPropertyService {
  constructor(
    @InjectRepository(PhotoOfProperty)
    private readonly photoOfPropertyRepository: Repository<PhotoOfProperty>,
  ) {}

  create(dto: PhotoOfPropertyDto): Promise<PhotoOfProperty> {
    const photo = this.photoOfPropertyRepository.create(dto);
    return this.photoOfPropertyRepository.save(photo);
  }

  findAll(): Promise<PhotoOfProperty[]> {
    return this.photoOfPropertyRepository.find();
  }

  findOne(id: number): Promise<PhotoOfProperty | null> {
    return this.photoOfPropertyRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdatePhotoofpropertyDto): Promise<PhotoOfProperty  | null> {
    await this.photoOfPropertyRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.photoOfPropertyRepository.delete(id);
  }
}
