import { Company } from 'src/company/entities/company.entity';
import { TypeOfMaterial } from 'src/typeofmaterial/entities/typeofmaterial.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'int', nullable: true })
  price_for_one: number;

  @Column({ type: 'smallint', nullable: true })
  isActive: number;

  @Column({type:'int',nullable:false})
  companyPhone:number;

  @Column({type:'int',nullable:false})
  companyWhatsapp:number;
  
  @Column({type:'int',nullable:false})
  Companyid:number;

  @Column({type:'int',nullable:false})
  TypeOfMaterialid:number;

  @ManyToOne(() => Company, (company) => company.id, { nullable: true })
  @JoinColumn({ name: 'Companyid' })
  company: Company;

  @ManyToOne(() => TypeOfMaterial)
  @JoinColumn({ name: 'TypeOfMaterialid' })
  typeOfMaterial: TypeOfMaterial;
}
