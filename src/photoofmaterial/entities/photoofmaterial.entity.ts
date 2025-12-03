import { Material } from 'src/material/entities/material.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class PhotoOfMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  photo: string;

  @ManyToOne(() => Material, (material) => material.id, { nullable: true })
  @JoinColumn({ name: 'Materialid' })
  material: Material;
}
