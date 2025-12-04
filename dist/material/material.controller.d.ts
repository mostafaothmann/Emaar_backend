import { MaterialService } from './material.service';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { MaterialDto } from './dto/create-material.dto';
export declare class MaterialController {
    private readonly materialService;
    constructor(materialService: MaterialService);
    create(MaterialDto: MaterialDto): Promise<import("./entities/material.entity").Material>;
    findAll(): Promise<import("./entities/material.entity").Material[]>;
    findOne(id: string): Promise<import("./entities/material.entity").Material | null>;
    update(id: string, updateMaterialDto: UpdateMaterialDto): Promise<import("./entities/material.entity").Material | null>;
    remove(id: string): Promise<void>;
}
