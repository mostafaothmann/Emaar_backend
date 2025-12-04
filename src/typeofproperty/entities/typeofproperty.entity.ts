import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TypeOfProperty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string;
}
