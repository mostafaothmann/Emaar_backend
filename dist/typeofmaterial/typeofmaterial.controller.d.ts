import { TypeOfMaterialService } from './typeofmaterial.service';
import { UpdateTypeOfMaterialDto } from './dto/update-typeofmaterial.dto';
import { TypeOfMaterialDto } from './dto/create-typeofmaterial.dto';
export declare class TypeofmaterialController {
    private readonly typeofmaterialService;
    constructor(typeofmaterialService: TypeOfMaterialService);
    create(createTypeofmaterialDto: TypeOfMaterialDto): Promise<import("./entities/typeofmaterial.entity").TypeOfMaterial>;
    findAll(): Promise<import("./entities/typeofmaterial.entity").TypeOfMaterial[]>;
    findOne(id: string): Promise<import("./entities/typeofmaterial.entity").TypeOfMaterial | null>;
    update(id: string, updateTypeofmaterialDto: UpdateTypeOfMaterialDto): Promise<import("./entities/typeofmaterial.entity").TypeOfMaterial | null>;
    remove(id: string): Promise<void>;
}
