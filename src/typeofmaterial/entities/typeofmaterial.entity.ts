import { Material } from 'src/material/entities/material.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class TypeOfMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  name: string;

    // 👇 One customer has many properties
  @OneToMany(() => Material, material => material.typeOfMaterial)
  materials: Material[];
  
}
