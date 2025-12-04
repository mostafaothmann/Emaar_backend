import { Customer } from './../../customer/entities/customer.entity';
import { Property } from 'src/property/entities/property.entity';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class CustomerPropertyOffer {
  @PrimaryColumn()
  Customerid: number;

  @PrimaryColumn()
  Propertyid: number;

  @Column({ type: 'datetime', nullable: true })
  date: Date;

  @Column({ type: 'int', nullable: true })
  budget: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  owner_customer_comment: string;

  @Column({ type: 'smallint', nullable: true })
  isActive: number;

  @Column({ type: 'datetime', nullable: true })
  endDate: Date;

  @ManyToOne(() => Customer, (customer) => customer.id)
  @JoinColumn({ name: 'Customerid' })
  customer: Customer;

  @ManyToOne(() => Property, (property) => property.id)
  @JoinColumn({ name: 'Propertyid' })
  property: Property;
}
