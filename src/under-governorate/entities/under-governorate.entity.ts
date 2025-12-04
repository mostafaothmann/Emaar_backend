import { Company } from "src/company/entities/company.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UnderGovernorate {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'char', length: 255, nullable: true })
    name: string;
    @OneToMany(() => Company, company => company.governorate)
    companies: Company[];
}
