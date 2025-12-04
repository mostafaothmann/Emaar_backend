import { UpdatePhotoofpropertyDto } from './dto/update-photoofproperty.dto';
import { PhotoOfPropertyService } from './photoofproperty.service';
import { PhotoOfPropertyDto } from './dto/create-photoofproperty.dto';
export declare class PhotoofpropertyController {
    private readonly photoofpropertyService;
    constructor(photoofpropertyService: PhotoOfPropertyService);
    create(createPhotoofpropertyDto: PhotoOfPropertyDto): Promise<import("./entities/photoofproperty.entity").PhotoOfProperty>;
    findAll(): Promise<import("./entities/photoofproperty.entity").PhotoOfProperty[]>;
    findOne(id: string): Promise<import("./entities/photoofproperty.entity").PhotoOfProperty | null>;
    update(id: string, updatePhotoofpropertyDto: UpdatePhotoofpropertyDto): Promise<import("./entities/photoofproperty.entity").PhotoOfProperty | null>;
    remove(id: string): Promise<void>;
}
