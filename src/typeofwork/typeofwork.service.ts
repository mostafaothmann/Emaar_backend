import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOfWork } from './entities/typeofwork.entity';

@Injectable()
export class TypeOfWorkService {
  constructor(
    @InjectRepository(TypeOfWork)
    private readonly typeOfWorkRepo: Repository<TypeOfWork>,
  ) {}

  async create(data: Partial<TypeOfWork>) {
    const typeOfWork = this.typeOfWorkRepo.create(data);
    return this.typeOfWorkRepo.save(typeOfWork);
  }

  async findAll() {
    return this.typeOfWorkRepo.find();
  }

  async findOne(id: number) {
    const typeOfWork = await this.typeOfWorkRepo.findOne({ where: { id } });
    if (!typeOfWork) throw new NotFoundException(`TypeOfWork ${id} not found`);
    return typeOfWork;
  }

  async update(id: number, data: Partial<TypeOfWork>) {
    const typeOfWork = await this.findOne(id);
    Object.assign(typeOfWork, data);
    return this.typeOfWorkRepo.save(typeOfWork);
  }

  async remove(id: number) {
    const result = await this.typeOfWorkRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`TypeOfWork ${id} not found`);
    }
    return { message: `TypeOfWork ${id} deleted successfully` };
  }
}
