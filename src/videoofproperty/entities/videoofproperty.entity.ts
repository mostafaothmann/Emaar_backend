import { Property } from 'src/property/entities/property.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class VideoOfProperty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  video: string;

  @ManyToOne(() => Property, property => property.id, { nullable: true })
  @JoinColumn({ name: 'Propertyid' })
  property: Property;
}
