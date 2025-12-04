import { Repository } from 'typeorm';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { MaterialDto } from './dto/create-material.dto';
import { Material } from './entities/material.entity';
export declare class MaterialService {
    private readonly materialRepository;
    constructor(materialRepository: Repository<Material>);
    create(dto: MaterialDto): Promise<Material>;
    findAll(): Promise<Material[]>;
    findOne(id: number): Promise<Material | null>;
    update(id: number, updateDto: UpdateMaterialDto): Promise<Material | null>;
    remove(id: number): Promise<void>;
}
