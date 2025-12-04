// p-status.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PStatus } from './entities/p-status.entity';
import { PStatusDto } from './dto/create-pstatus.dto';
import { UpdatePStatusDto } from './dto/update-pstatus.dto';


@Injectable()
export class PStatusService {
  constructor(
    @InjectRepository(PStatus)
    private readonly pStatusRepository: Repository<PStatus>,
  ) {}

  async create(dto: PStatusDto): Promise<PStatus> {
    const entity = this.pStatusRepository.create(dto);
    return await this.pStatusRepository.save(entity);
  }

  async findAll(): Promise<PStatus[]> {
    return await this.pStatusRepository.find();
  }

  async findOne(id: number): Promise<PStatus| null> {
    const item = await this.pStatusRepository.findOne({ where: { id } });
    if (!item) {
      throw new NotFoundException(`PStatus with ID ${id} not found`);
    }
    return item;
  }

  async update(id: number, dto: UpdatePStatusDto): Promise<PStatus| null> {
    await this.pStatusRepository.update(id,dto);
    return this.findOne(id);

  }

  async remove(id: number): Promise<void> {
    const result = await this.pStatusRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`PStatus with ID ${id} not found`);
    }
  }
}
