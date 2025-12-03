import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TypeOfCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;
}
