import { Property } from 'src/property/entities/property.entity';
import { Company } from './../../company/entities/company.entity';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class CompanyPropertyOffer {
  @PrimaryColumn()
  Companyid: number;

  @PrimaryColumn()
  Propertyid: number;

  @Column({ type: 'datetime', nullable: true })
  date: Date;

  @Column({ type: 'int', nullable: true })
  budget: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  customer_comment: string;

   @Column({ type: 'smallint', nullable: true })
   isActive: number;

  @Column({ type: 'datetime', nullable: true })
  endDate: Date;

  @ManyToOne(() => Company, (company) => company.id)
  @JoinColumn({ name: 'Companyid' })
  company: Company;

  @ManyToOne(() => Property, (property) => property.id)
  @JoinColumn({ name: 'Propertyid' })
  property: Property;
}
