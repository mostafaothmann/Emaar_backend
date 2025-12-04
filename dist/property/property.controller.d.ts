import { PropertyService } from './property.service';
import { PropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    create(PropertyDto: PropertyDto): Promise<import("./entities/property.entity").Property>;
    findAll(): Promise<import("./entities/property.entity").Property[]>;
    findOne(id: string): Promise<import("./entities/property.entity").Property | null>;
    findAllBySearch(searchQuery: string): Promise<import("./entities/property.entity").Property[]>;
    update(id: string, updatePropertyDto: UpdatePropertyDto): Promise<import("./entities/property.entity").Property | null>;
    remove(id: string): Promise<void>;
}
