import { CustomerPropertyOffer } from 'src/customer-property-offer/entities/customer-property-offer.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { PStatus } from 'src/p_status/entities/p-status.entity';
import { TypeOfProperty } from 'src/typeofproperty/entities/typeofproperty.entity';
import { TypeOfOwnering } from 'src/typeofwnering/entities/typeofownering.entity';
import { TypeOfWork } from 'src/typeofwork/entities/typeofwork.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  height: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  minimum_budget: string

  @Column({ type: 'varchar', length: 255 })
  maximum_time: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  direction: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  location: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'int', nullable: true })
  area: number;

  @Column({ type: 'smallint', nullable: true })
  isActive: number;


  /*  @ManyToOne(() => TypeOfCompany)
    @JoinColumn({ name: 'typeOfCompanyId' })
    typeOfCompany: TypeOfCompany;
  
   */

  @Column({ nullable: true })
  typeOfPropertyId: number;

  @Column({ nullable: true })
  typeOfOwneringId: number;

  @Column({ nullable: true })
  typeOfWorkId: number;

  @Column({ nullable: true })
  pstatusId: number;

  @Column({ nullable: true })
  customerId: number;

  @ManyToOne(() => TypeOfProperty)
  @JoinColumn({ name: 'typeOfPropertyId' })
  typeOfProperty: TypeOfProperty;

  @ManyToOne(() => TypeOfOwnering)
  @JoinColumn({ name: 'typeOfOwneringId' })
  typeOfOwnering: TypeOfOwnering;

  @ManyToOne(() => TypeOfWork)
  @JoinColumn({ name: 'typeOfWorkId' })
  typeOfWork: TypeOfWork;

  @ManyToOne(() => PStatus)
  @JoinColumn({ name: 'pstatusId' })
  pstatus: PStatus;

  @ManyToOne(() => Customer, { eager: false })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @OneToMany(() => CustomerPropertyOffer, CustomerPropertyOffer => CustomerPropertyOffer.property)
  customerPropertiesOffer: CustomerPropertyOffer[];
}
