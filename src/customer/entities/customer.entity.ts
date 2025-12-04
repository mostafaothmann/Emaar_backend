import { ROLE } from 'src/auth/enums/role.enum';
import { CustomerPropertyOffer } from 'src/customer-property-offer/entities/customer-property-offer.entity';
import { Property } from 'src/property/entities/property.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
   
  @Column({ type: 'varchar', length: 255, nullable: true })
  firstName: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lastName: string;

  @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
  password: string;

  @Column({ type: 'int', nullable: true })
  secondPhone: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  photo: string;

  @Column({
    type:"enum",
    enum:ROLE,
    default:ROLE.CUSTOMER
  })
  role:ROLE;

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

  // 👇 One customer has many properties
  @OneToMany(() => Property, property => property.customer)
  properties: Property[];
   // 👇 One customer has many offers
  @OneToMany(() => CustomerPropertyOffer, customerPropertyOffer => customerPropertyOffer.customer)
  offers: CustomerPropertyOffer[];
}
