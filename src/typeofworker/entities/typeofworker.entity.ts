import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TypeOfWorker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  type: string;
}
