import { TypeOfOwneringService } from './typeofownering.service';
import { TypeOfOwneringDto } from './dto/create-typeofownering.dto';
import { UpdateTypeOfOwneringDto } from './dto/update-typeofownering.dto';
export declare class TypeofwneringController {
    private readonly typeofowneringService;
    constructor(typeofowneringService: TypeOfOwneringService);
    create(createTypeofwneringDto: TypeOfOwneringDto): Promise<import("./entities/typeofownering.entity").TypeOfOwnering>;
    findAll(): Promise<import("./entities/typeofownering.entity").TypeOfOwnering[]>;
    findOne(id: string): Promise<import("./entities/typeofownering.entity").TypeOfOwnering | null>;
    update(id: string, updateTypeofwneringDto: UpdateTypeOfOwneringDto): Promise<import("./entities/typeofownering.entity").TypeOfOwnering | null>;
    remove(id: string): Promise<void>;
}
