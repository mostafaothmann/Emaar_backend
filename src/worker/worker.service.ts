import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkerDto } from './dto/create-worker.dto';
import { Worker } from './entities/worker.entity';
import { UpdateWorkerDto } from './dto/update-worker.dto';


@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(Worker)
    private readonly workerRepository: Repository<Worker>,
  ) {}

  create(dto: WorkerDto): Promise<Worker> {
    const worker = this.workerRepository.create(dto);
    return this.workerRepository.save(worker);
  }

  findAll(): Promise<Worker[]> {
    return this.workerRepository.find();
  }

  findOne(id: number): Promise<Worker | null> {
    return this.workerRepository.findOneBy({ id });
  }

  findByEmail(email: string): Promise<Worker | null> {
      return this.workerRepository.findOneBy({ email });
    }

  async update(id: number, updateDto: UpdateWorkerDto): Promise<Worker| null> {
    await this.workerRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.workerRepository.delete(id);
  }
}
