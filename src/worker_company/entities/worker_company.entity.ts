import { Company } from 'src/company/entities/company.entity';
import { Worker } from './../../worker/entities/worker.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class WorkerCompany {
  @PrimaryColumn()
  Workerid: number;

  @PrimaryColumn()
  Companyid: number;

  @Column({ type: 'datetime', nullable: true })
  startDate: Date;

  @Column({ type: 'datetime', nullable: true })
  endDate: Date;

  @ManyToOne(() => Worker, worker => worker.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'Workerid' })
  worker: Worker;

  @ManyToOne(() => Company, company => company.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'Companyid' })
  company: Company;
}
