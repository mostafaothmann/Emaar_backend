import { ROLE } from 'src/auth/enums/role.enum';
import { TypeOfWorker } from 'src/typeofworker/entities/typeofworker.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 255, nullable: true })
  firstName: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
  email: string;

   @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
  password: string;

  
    @Column({
      type:"enum",
      enum:ROLE,
      default:ROLE.WORKER
    })
    role:ROLE;

  @Column({ type: 'int', nullable: true })
  secondPhone: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  photo: string;

  @Column({ type: 'int', nullable: true, unique: true })
  phone: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  instaLink: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  facebookLink: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  linkedinLink: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  websiteLink: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;
  
  
  @Column({ nullable: true })
  TypeOfWorkerid: number;
  
  @ManyToOne(() => TypeOfWorker, typeOfWorker => typeOfWorker.id, { nullable: true })
  @JoinColumn({ name: 'TypeOfWorkerid' })
  typeOfWorker: TypeOfWorker;
}
