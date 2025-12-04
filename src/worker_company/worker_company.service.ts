import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Worker } from 'src/worker/entities/worker.entity';
import { Company } from 'src/company/entities/company.entity';
import { WorkerCompany } from './entities/worker_company.entity';

@Injectable()
export class WorkerCompanyService {
  constructor(
    @InjectRepository(WorkerCompany)
    private readonly workerCompanyRepo: Repository<WorkerCompany>,

    @InjectRepository(Worker)
    private readonly workerRepo: Repository<Worker>,

    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>,
  ) {}

  async assignWorkerToCompany(
    workerId: number,
    companyId: number,
    startDate?: Date,
    endDate?: Date,
  ) {
    const worker = await this.workerRepo.findOne({ where: { id: workerId } });
    const company = await this.companyRepo.findOne({ where: { id: companyId } });

    if (!worker) throw new NotFoundException(`Worker ${workerId} not found`);
    if (!company) throw new NotFoundException(`Company ${companyId} not found`);

    const relation = this.workerCompanyRepo.create({
      Workerid: workerId,
      Companyid: companyId,
      startDate,
      endDate,
      worker,
      company,
    });

    return this.workerCompanyRepo.save(relation);
  }

  async updateAssignment(
    workerId: number,
    companyId: number,
    startDate?: Date,
    endDate?: Date,
  ) {
    const relation = await this.workerCompanyRepo.findOne({
      where: { Workerid: workerId, Companyid: companyId },
    });

    if (!relation) {
      throw new NotFoundException(
        `Relation Worker ${workerId} - Company ${companyId} not found`,
      );
    }

    relation.startDate = startDate ?? relation.startDate;
    relation.endDate = endDate ?? relation.endDate;

    return this.workerCompanyRepo.save(relation);
  }

  async findAll() {
    return this.workerCompanyRepo.find({
      relations: ['worker', 'company'],
    });
  }

  async findByWorker(workerId: number) {
    return this.workerCompanyRepo.find({
      where: { Workerid: workerId },
      relations: ['company'],
    });
  }

  async findByCompany(companyId: number) {
    return this.workerCompanyRepo.find({
      where: { Companyid: companyId },
      relations: ['worker'],
    });
  }

  async removeAssignment(workerId: number, companyId: number) {
    await this.workerCompanyRepo.delete({ Workerid: workerId, Companyid: companyId });
    return { message: `Unlinked worker ${workerId} from company ${companyId}` };
  }
}
