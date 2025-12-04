import { PhotoOfProperty } from "./entities/photoofproperty.entity";
import { Repository } from "typeorm";
import { PhotoOfPropertyDto } from "./dto/create-photoofproperty.dto";
import { UpdatePhotoofpropertyDto } from "./dto/update-photoofproperty.dto";
export declare class PhotoOfPropertyService {
    private readonly photoOfPropertyRepository;
    constructor(photoOfPropertyRepository: Repository<PhotoOfProperty>);
    create(dto: PhotoOfPropertyDto): Promise<PhotoOfProperty>;
    findAll(): Promise<PhotoOfProperty[]>;
    findOne(id: number): Promise<PhotoOfProperty | null>;
    update(id: number, updateDto: UpdatePhotoofpropertyDto): Promise<PhotoOfProperty | null>;
    remove(id: number): Promise<void>;
}
