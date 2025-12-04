import { Company } from "src/company/entities/company.entity";
import { Column, OneToMany, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Governorate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'char', length: 255, nullable: true })
    name: string;

    @OneToMany(() => Company, company => company.governorate)
    companies: Company[];
}
