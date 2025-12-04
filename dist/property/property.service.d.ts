import { Repository } from 'typeorm';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { PropertyDto } from './dto/create-property.dto';
export declare class PropertyService {
    private readonly propertyRepository;
    constructor(propertyRepository: Repository<Property>);
    create(dto: PropertyDto): Promise<Property>;
    findAll(): Promise<Property[]>;
    findOne(id: number): Promise<Property | null>;
    update(id: number, updateDto: UpdatePropertyDto): Promise<Property | null>;
    remove(id: number): Promise<void>;
    findPropertiesByCustomer(customerId: number): Promise<Property[]>;
    findBySearch(searchQuery: string): Promise<Property[]>;
}
