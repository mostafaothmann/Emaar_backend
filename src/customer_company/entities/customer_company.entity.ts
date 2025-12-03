import { Company } from 'src/company/entities/company.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

@Entity()
export class CustomerCompany {
  @PrimaryColumn()
  Customerid: number;

  @PrimaryColumn()
  Companyid: number;

  @ManyToOne(() => Customer, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'Customerid' })
  customer: Customer;

  @ManyToOne(() => Company, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'Companyid' })
  company: Company;

  @Column({ type: 'datetime', nullable: true })
  startingDate: Date;
}
