import { Repository } from 'typeorm';
import { UpdateTypeOfMaterialDto } from './dto/update-typeofmaterial.dto';
import { TypeOfMaterial } from './entities/typeofmaterial.entity';
import { TypeOfMaterialDto } from './dto/create-typeofmaterial.dto';
export declare class TypeOfMaterialService {
    private readonly typeOfMaterialRepository;
    constructor(typeOfMaterialRepository: Repository<TypeOfMaterial>);
    create(dto: TypeOfMaterialDto): Promise<TypeOfMaterial>;
    findAll(): Promise<TypeOfMaterial[]>;
    findOne(id: number): Promise<TypeOfMaterial | null>;
    update(id: number, updateDto: UpdateTypeOfMaterialDto): Promise<TypeOfMaterial | null>;
    remove(id: number): Promise<void>;
}
