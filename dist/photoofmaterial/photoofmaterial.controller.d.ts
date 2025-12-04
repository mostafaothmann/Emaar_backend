import { PhotoOfMaterialService } from './photoofmaterial.service';
import { PhotoOfMaterialDto } from './dto/create-photoofmaterial.dto';
import { UpdatePhotoOfMaterialDto } from './dto/update-photoofmaterial.dto';
export declare class PhotoofmaterialController {
    private readonly photoofmaterialService;
    constructor(photoofmaterialService: PhotoOfMaterialService);
    create(createPhotoofmaterialDto: PhotoOfMaterialDto): Promise<import("./entities/photoofmaterial.entity").PhotoOfMaterial>;
    findAll(): Promise<import("./entities/photoofmaterial.entity").PhotoOfMaterial[]>;
    findOne(id: string): Promise<import("./entities/photoofmaterial.entity").PhotoOfMaterial | null>;
    update(id: string, updatePhotoofmaterialDto: UpdatePhotoOfMaterialDto): Promise<import("./entities/photoofmaterial.entity").PhotoOfMaterial | null>;
    remove(id: string): Promise<void>;
}
