import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateTypeOfWorkerDto } from './dto/update-typeofworker.dto';
import { TypeOfWorker } from './entities/typeofworker.entity';
import { TypeOfWorkerDto } from './dto/create-typeofworker.dto';

@Injectable()
export class TypeOfWorkerService {
  constructor(
    @InjectRepository(TypeOfWorker)
    private readonly typeOfWorkerRepository: Repository<TypeOfWorker>,
  ) {}

  create(dto: TypeOfWorkerDto): Promise<TypeOfWorker> {
    const type = this.typeOfWorkerRepository.create(dto);
    return this.typeOfWorkerRepository.save(type);
  }

  findAll(): Promise<TypeOfWorker[]> {
    return this.typeOfWorkerRepository.find();
  }

  findOne(id: number): Promise<TypeOfWorker | null> {
    return this.typeOfWorkerRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateTypeOfWorkerDto): Promise<TypeOfWorker | null> {
    await this.typeOfWorkerRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.typeOfWorkerRepository.delete(id);
  }
}
