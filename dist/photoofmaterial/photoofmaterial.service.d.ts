import { Repository } from 'typeorm';
import { UpdatePhotoOfMaterialDto } from './dto/update-photoofmaterial.dto';
import { PhotoOfMaterial } from './entities/photoofmaterial.entity';
import { PhotoOfMaterialDto } from './dto/create-photoofmaterial.dto';
export declare class PhotoOfMaterialService {
    private readonly photoOfMaterialRepository;
    constructor(photoOfMaterialRepository: Repository<PhotoOfMaterial>);
    create(dto: PhotoOfMaterialDto): Promise<PhotoOfMaterial>;
    findAll(): Promise<PhotoOfMaterial[]>;
    findOne(id: number): Promise<PhotoOfMaterial | null>;
    update(id: number, updateDto: UpdatePhotoOfMaterialDto): Promise<PhotoOfMaterial | null>;
    remove(id: number): Promise<void>;
}
