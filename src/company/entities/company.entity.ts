import { Governorate } from 'src/governorate/entities/governorate.entity';
import { ROLE } from './../../auth/enums/role.enum';
import { TypeOfCompany } from 'src/typeofcompany/entities/typeofcompany.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UnderGovernorate } from 'src/under-governorate/entities/under-governorate.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 255, nullable: true })
  firstName: string;

  @Column({ type: 'datetime', nullable: true })
  creatingDate: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
  email: string;

  @Column({ type: 'int', nullable: true })
  secondPhone: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  photo: string;

  @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
  phone: string;

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

  @Column({ type: 'varchar', length: 255, nullable: true })
  location: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({
    type: "enum",
    enum: ROLE,
    default: ROLE.COMPANY
  })
  role: ROLE;

  @Column({ nullable: true })
  typeOfCompanyId: number;

  @Column({ nullable: true })
  governorateId: number;

  @Column({ nullable: true })
  undergovernorateId: number;

  @ManyToOne(() => TypeOfCompany)
  @JoinColumn({ name: 'typeOfCompanyId' })
  typeOfCompany: TypeOfCompany;

  @ManyToOne(() => Governorate)
  @JoinColumn({ name: 'governorateId' })
  governorate: Governorate;

  @ManyToOne(() => UnderGovernorate)
  @JoinColumn({ name: 'undergovernorateId' })
  undergovernorate: UnderGovernorate;

  @Column({ type: 'smallint', nullable: true })
  isActive: boolean;
}
