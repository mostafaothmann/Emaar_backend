import { TypeOfPropertyService } from './typeofproperty.service';
import { TypeOfPropertyDto } from './dto/create-typeofproperty.dto';
import { UpdateTypeOfPropertyDto } from './dto/update-typeofproperty.dto';
export declare class TypeofpropertyController {
    private readonly typeofpropertyService;
    constructor(typeofpropertyService: TypeOfPropertyService);
    create(createTypeofpropertyDto: TypeOfPropertyDto): Promise<import("./entities/typeofproperty.entity").TypeOfProperty>;
    findAll(): Promise<import("./entities/typeofproperty.entity").TypeOfProperty[]>;
    findOne(id: string): Promise<import("./entities/typeofproperty.entity").TypeOfProperty | null>;
    update(id: string, updateTypeofpropertyDto: UpdateTypeOfPropertyDto): Promise<import("./entities/typeofproperty.entity").TypeOfProperty | null>;
    remove(id: string): Promise<void>;
}
