import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOfOwnering } from './entities/typeofownering.entity';
import { TypeOfOwneringDto } from './dto/create-typeofownering.dto';
import { UpdateTypeOfOwneringDto } from './dto/update-typeofownering.dto';


@Injectable()
export class TypeOfOwneringService {
  constructor(
    @InjectRepository(TypeOfOwnering)
    private readonly typeOfOwneringRepository: Repository<TypeOfOwnering>,
  ) {}

  create(dto: TypeOfOwneringDto): Promise<TypeOfOwnering> {
    const type = this.typeOfOwneringRepository.create(dto);
    return this.typeOfOwneringRepository.save(type);
  }

  findAll(): Promise<TypeOfOwnering[]> {
    return this.typeOfOwneringRepository.find();
  }

  findOne(id: number): Promise<TypeOfOwnering | null> {
    return this.typeOfOwneringRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateTypeOfOwneringDto): Promise<TypeOfOwnering| null> {
    await this.typeOfOwneringRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.typeOfOwneringRepository.delete(id);
  }
}
